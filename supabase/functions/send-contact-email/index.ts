
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();
    
    console.log("Données reçues:", { name, email, subject, message });
    console.log("API Key présente:", !!Deno.env.get("RESEND_API_KEY"));
    
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Informations manquantes" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Créer l'objet du message avec le contenu reçu du formulaire
    const subjectLine = subject ? subject : "Nouveau message de contact";
    
    // Envoyer l'email au destinataire final (votre email personnel)
    const emailResponse = await resend.emails.send({
      from: "Contact <contact@cuddlebuddies.fr>",
      to: ["bienplus759@gmail.com"],
      reply_to: email,
      subject: `[Contact CuddleBuddies] ${subjectLine}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Sujet:</strong> ${subject || "Non spécifié"}</p>
        <hr />
        <div>
          ${message.replace(/\n/g, "<br />")}
        </div>
      `,
    });

    console.log("Réponse de l'API Resend (email principal):", JSON.stringify(emailResponse));
    
    if (emailResponse.error) {
      throw new Error(`Erreur d'envoi email principal: ${emailResponse.error.message}`);
    }

    // Envoyer une confirmation à l'expéditeur
    const confirmationResponse = await resend.emails.send({
      from: "Contact <contact@cuddlebuddies.fr>",
      to: [email],
      subject: "Nous avons bien reçu votre message",
      html: `
        <h2>Merci de nous avoir contactés, ${name}!</h2>
        <p>Nous avons bien reçu votre message et y répondrons dans les plus brefs délais.</p>
        <p>Pour rappel, voici votre message :</p>
        <hr />
        <div style="background-color: #f7f7f7; padding: 15px; border-left: 4px solid #6b46c1;">
          ${message.replace(/\n/g, "<br />")}
        </div>
        <hr />
        <p>À bientôt,<br>L'équipe CuddleBuddies</p>
      `,
    });
    
    console.log("Réponse de l'API Resend (email confirmation):", JSON.stringify(confirmationResponse));

    if (confirmationResponse.error) {
      console.warn(`Avertissement: Email de confirmation non envoyé: ${confirmationResponse.error.message}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Erreur dans la fonction send-contact-email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

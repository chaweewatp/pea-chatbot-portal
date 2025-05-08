// pages/chatbots/regulation.tsx
import ChatbotIframe from "@/components/ChatbotIframe";

export default function StaffPromotionChatbot() {
  const iframeSrc =
    "https://copilotstudio.microsoft.com/environments/Default-a2339f6d-bf4a-44db-88ec-cb8f27da4abb/bots/cr62c_qFRs7PhZ3ddfcljg02o-z/webchat?__version__=2";

  return <ChatbotIframe src={iframeSrc} />;
}

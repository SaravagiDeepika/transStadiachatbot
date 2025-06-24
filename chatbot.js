const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const intents = {
  WelcomeIntent: {
    phrases: ["hi", "hello", "hey", "i want help choosing a course", "can you guide me for college options?"],
    response: "Hello! I’m your course advisor. What was your stream in 12th grade – Science, Commerce, or Arts?"
  },
  StreamIntent: {
    phrases: ["science", "commerce", "arts"],
    response: "Got it! Could you tell me your subjects or areas of interest? For example, Math, Biology, Economics, etc."
  },
  InterestIntentScience: {
    phrases: ["math and computer science", "physics and maths", "computer science", "ai and data science"],
    response: "Based on your interests, you can explore B.Sc in AI & Sports Analytics or Data Science & Sports Studies at TransStadia Institute. Would you like to know about career paths?"
  },
  InterestIntentCommerce: {
    phrases: ["accounts", "economics", "business studies", "commerce and marketing"],
    response: "You can consider BMS in Sports Management or BMS in Management & Sports Administration. Interested in future opportunities in these fields?"
  },
  CareerPathIntent: {
    phrases: ["yes, tell me the career options", "what can i do after this course?", "career scope?"],
    response: "These degrees open up careers in data analysis, sports tech, management, event planning, sports marketing, and more. TransStadia also offers internships and placement support through its IBM collaboration."
  },
  EligibilityIntent: {
    phrases: ["my percentage is", "i got", "i have"],
    response: "You’re eligible! Our basic criteria is 40% or above with a qualifying entrance test. Would you like me to send you the brochure or connect you with admissions?"
  },
  EmailBrochureIntent: {
    phrases: ["yes, send brochure", "can you email the brochure?", "i want the brochure in my email"],
    response: "Sure! Please share your email address so I can send you the brochure."
  },
  CollectUserInfoIntent: {
    phrases: ["@gmail.com", "@yahoo.com", "@outlook.com"],
    response: "Thanks! Your email has been received. Our admissions team will be in touch shortly."
  },
  ClosingIntent: {
    phrases: ["i want to apply", "connect me to admission", "thank you"],
    response: "Great! I’ve shared your details with the admissions team. You’ll hear from them soon. Good luck!"
  }
};

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${text}`;
  msg.style.margin = '10px';
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;
  appendMessage('You', input);
  userInput.value = '';

  let found = false;
  for (let key in intents) {
    const { phrases, response } = intents[key];
    if (phrases.some(p => input.includes(p))) {
      appendMessage('Bot', response);
      found = true;
      break;
    }
  }
  if (!found) {
    appendMessage('Bot', "I'm sorry, I didn't understand that. Can you please rephrase?");
  }
}
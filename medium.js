const healthResponses = {

 
  // Sintomas respiratórios
  "sore throat": "Gargle with warm salt water and drink fluids. Lozenges can help. If it worsens or lasts more than a few days, consult a doctor.",
  "runny nose": "Stay hydrated and consider using saline nasal spray. If symptoms persist, consult a doctor.",
  "shortness of breath": "If mild, rest and practice deep breathing. If sudden, severe, or persistent, seek emergency medical care.",
  "chest pain": "Chest pain can be serious. If sharp, heavy, or radiating, call emergency services immediately.",

  // Sintomas neurológicos
  "dizziness": "Sit or lie down immediately. Drink water. If recurrent or accompanied by fainting, consult a doctor.",
  "fainting": "Lay the person flat and elevate their legs. Seek medical evaluation after fainting.",
  "seizure": "Ensure safety by moving objects away. Do not restrain the person. Seek emergency medical help.",

  // Sintomas psicológicos
  "anxiety": "Practice deep breathing, meditation, or light exercise. If persistent, consult a mental health professional.",
  "depression": "Talk to someone you trust. Seek professional support. If experiencing suicidal thoughts, seek help immediately.",

  // Sintomas dermatológicos
  "rash": "Keep the area clean and avoid scratching. If spreading, painful, or associated with fever, seek medical care.",
  "itching": "Apply cool compresses or use antihistamine creams. If persistent, consult a dermatologist.",
  "burn": "Cool the burn under running water. Do not apply ice. For severe burns, seek emergency care.",

  // Outros
  "stomach ache": "Rest, drink water, and eat bland foods. If severe or persistent, seek medical advice.",
  "diarrhea": "Drink fluids with electrolytes to prevent dehydration. If it lasts more than 2 days or has blood, consult a doctor.",
  "constipation": "Increase fiber intake, drink water, and exercise. If persistent, consult a healthcare professional.",
  "fatigue": "Rest, maintain hydration, and eat balanced meals. If persistent, consult a doctor.",
  "insomnia": "Keep a regular sleep schedule, avoid caffeine before bedtime, and create a calming environment.",
  "vomiting": "Rest and sip small amounts of fluids. If severe, frequent, or with blood, seek medical care.",
  "ear pain": "Keep the ear dry and avoid inserting objects. If persistent or severe, consult a doctor.",
  "eye pain": "Rest your eyes, avoid screens. If accompanied by vision loss, seek urgent care."
};// Exporta para Node.js
if (typeof module !== "undefined") {
  module.exports = healthResponses;
}

// Exporta para browser (window object)
if (typeof window !== "undefined") {
  window.healthResponses = healthResponses;
}

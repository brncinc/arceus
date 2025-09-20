const healthResponses = {
  // Sintomas respiratórios
 {
   // Sintomas respiratórios
  "wheezing": "Sit upright, breathe slowly. Seek urgent care if severe.",
  "runny nose": "Use saline spray, stay hydrated. Seek care if prolonged.",
  "chest tightness": "Rest, monitor. Seek urgent care if severe.",
  "loss of smell": "Monitor, avoid irritants. Seek evaluation if persistent.",

  // Sintomas neurológicos
  "brain fog": "Rest, hydrate, organize tasks. Seek care if persistent.",
  "difficulty concentrating": "Take breaks, reduce stress. Consult doctor if persistent.",
  "tingling fingers": "Avoid pressure, maintain posture. Seek care if persistent.",
  "muscle twitching": "Rest, hydrate. Seek evaluation if frequent.",

  // Sintomas psicológicos
  "irritability": "Rest, manage stress. Seek help if persistent.",
  "emotional numbness": "Engage socially, express feelings. Seek support if prolonged.",
  "sleep disturbance": "Maintain routine, avoid screens. Seek help if persistent.",
  "panic feelings": "Practice slow breathing, find calm space. Seek support if frequent.",

  // Sintomas dermatológicos
  "itchy scalp": "Use mild shampoo, avoid scratching. Consult dermatologist if persistent.",
  "cold sores": "Keep area clean, avoid touching. Seek care if frequent.",
  "dry lips": "Use lip balm, hydrate. Seek care if cracking persists.",
  "skin discoloration": "Monitor, protect from sun. Seek dermatologist if spreading.",

  // Sintomas digestivos
  "frequent burping": "Eat slowly, avoid carbonated drinks. Seek care if persistent.",
  "food intolerance": "Track foods, avoid triggers. Seek evaluation if frequent.",
  "abdominal cramps": "Rest, hydrate, eat light meals. Seek care if severe.",
  "heartburn at night": "Elevate head, avoid heavy meals. Seek care if frequent.",

  // Sintomas musculoesqueléticos
  "ankle pain": "Rest, elevate, apply cold. Seek care if swollen.",
  "knee stiffness": "Stretch gently, hydrate. Seek doctor if severe.",
  "wrist pain": "Avoid strain, rest. Seek care if persistent.",
  "neck tension": "Stretch, maintain posture. Seek care if persistent.",

  // Sintomas cardiovasculares
  "rapid heartbeat": "Rest, hydrate. Seek urgent care if persistent.",
  "low blood pressure": "Hydrate, rise slowly. Seek evaluation if symptomatic.",
  "fainting spells": "Lay flat, seek evaluation immediately.",
  "cold hands/feet": "Warm, stay active. Seek care if persistent.",

  // Saúde feminina
  "menstrual spotting": "Track cycles, consult gynecologist if unusual.",
  "breast lumps": "Monitor, consult gynecologist immediately.",
  "painful intercourse": "Use lubrication, consult gynecologist if persistent.",
  "vaginal itching": "Maintain hygiene, consult gynecologist if persistent.",

  // Saúde masculina
  "painful ejaculation": "Monitor symptoms, consult urologist.",
  "blood in urine": "Seek urologist immediately.",
  "frequent nighttime urination": "Hydrate, track symptoms. Seek evaluation if persistent.",
  "prostate pain": "Monitor symptoms, consult urologist if persistent.",

  // Sintomas gerais
  "feeling faint": "Sit/lie down immediately. Seek care if frequent.",
  "excessive sweating": "Stay hydrated, monitor. Seek care if sudden or severe.",
  "unexplained bruising": "Monitor, avoid trauma. Seek medical evaluation.",
  "sudden weight loss": "Track diet, consult doctor if unexplained.",

  // Sintomas sensoriais
  "blurred vision": "Rest eyes, avoid strain. Seek care if persistent.",
  "ringing in ears": "Avoid loud sounds, rest. Seek evaluation if persistent.",
  "sudden hearing loss": "Seek urgent evaluation.",
  "eye discharge": "Keep clean, avoid rubbing. Seek care if persistent.",

  // Sintomas imunológicos
  "frequent infections": "Maintain hygiene, eat balanced diet. Seek evaluation if recurrent.",
  "swollen lymph nodes": "Monitor size, rest. Seek care if persistent or painful.",
  "persistent fatigue": "Rest, hydrate, eat well. Seek care if prolonged.",
  "joint swelling with redness": "Rest, apply cold. Seek care if painful."

  // Sintomas respiratórios adicionais
  "snoring": "Maintain healthy weight, sleep on side, avoid alcohol. Consult doctor if severe.",
  "nosebleed": "Pinch nose, lean forward, stay calm. Seek care if frequent or heavy.",
  "chronic cough": "Avoid irritants, stay hydrated. Seek evaluation if lasting more than 8 weeks.",
  "sore throat with fever": "Rest, fluids, consider pain relievers. Consult doctor if severe or persistent.",

  // Sintomas neurológicos adicionais
  "tingling sensation": "Avoid pressure on limbs, maintain posture. Seek care if persistent or spreading.",
  "numbness": "Monitor affected area, avoid injury. Seek evaluation if sudden or severe.",
  "migraine": "Rest in dark, quiet room, hydrate, consider OTC medications. Seek care if sudden change or severe.",
  "vertigo": "Sit or lie down, avoid sudden movements. Seek medical attention if recurrent or severe.",

  // Sintomas psicológicos adicionais
  "low motivation": "Set small goals, engage in enjoyable activities. Seek mental health support if prolonged.",
  "social withdrawal": "Stay connected with friends/family. Seek professional support if persistent.",
  "mood depression": "Engage in physical activity, express feelings. Consult mental health professional if prolonged.",

  // Sintomas dermatológicos adicionais
  "sunburn": "Cool compress, hydrate, avoid further sun exposure. Seek care if severe or blisters form.",
  "fungal infection": "Keep area dry and clean, use antifungal cream. Consult dermatologist if persistent.",
  "psoriasis": "Moisturize, avoid triggers, gentle care. Consult dermatologist for treatment options.",
  "seborrheic dermatitis": "Use medicated shampoos, avoid harsh soaps. Consult dermatologist if persistent.",

  // Sintomas digestivos adicionais
  "abdominal bloating": "Eat slowly, avoid gas-producing foods, hydrate. Consult doctor if persistent.",
  "acid indigestion": "Avoid spicy/fatty foods, eat smaller meals. Seek evaluation if frequent or severe.",
  "constipation with pain": "Increase fiber and fluids, gentle exercise. Seek care if persistent or severe.",
  "diarrhea with fever": "Hydrate with electrolytes, rest. Seek care if prolonged or with blood.",

  // Sintomas musculoesqueléticos adicionais
  "foot swelling": "Elevate feet, limit standing. Seek care if persistent or painful.",
  "shoulder stiffness": "Stretch gently, apply heat. Consult doctor if persistent or severe.",
  "muscle weakness in limbs": "Rest, maintain nutrition. Seek medical evaluation if unexplained.",
  "joint redness": "Rest, apply cold compress. Seek care if swollen or painful.",

  // Sintomas cardiovasculares adicionais
  "dizziness on standing": "Rise slowly, hydrate. Consult doctor if frequent.",
  "chest fluttering": "Monitor heart rate, rest. Seek urgent care if persistent.",
  "shortness of breath during activity": "Pace yourself, rest. Consult doctor if worsening.",
  "swelling around eyes": "Monitor, limit salt intake. Seek medical care if persistent.",
  "cough": "Stay hydrated, rest. Seek care if persistent or severe.",
  "fever": "Rest, hydrate. Seek care if high or persistent.",
  "headache": "Rest, hydrate. Take mild pain relievers. Seek care if severe.",
  "nausea": "Sip fluids, eat bland foods. Seek care if persistent.",
  "vomiting": "Rest, hydrate in small sips. Seek care if frequent.",
  "diarrhea": "Drink fluids with electrolytes. Seek care if persistent.",
  "constipation": "Increase fiber, hydrate, exercise. Seek care if persistent.",
  "fatigue": "Rest, hydrate, eat well. Seek care if persistent.",
  "dizziness": "Sit/lie down immediately. Seek care if recurrent.",
  "chest pain": "Rest, monitor. Seek emergency care if severe.",
  "shortness of breath": "Rest, deep breathing. Seek urgent care if sudden.",
  "palpitations": "Rest, monitor heart rate. Seek urgent care if persistent.",
  "anxiety": "Practice relaxation and deep breathing. Seek support if persistent.",
  "depression": "Talk to someone trusted. Seek professional help if prolonged.",
  "insomnia": "Keep regular sleep schedule. Seek care if persistent.",
  "muscle pain": "Rest, stretch, use pain relief as needed.",
  "joint pain": "Rest, apply heat/cold. Seek care if swollen.",
  "rash": "Keep clean, avoid scratching. Seek care if spreading.",
  "blisters": "Keep clean, avoid popping. Seek care if painful.",
  "eye irritation": "Use lubricating drops. Seek care if persistent.",
  "snoring": "Maintain healthy weight, sleep on side. Consult doctor if severe.",
  "nosebleed": "Pinch nose, lean forward. Seek care if frequent.",
  "chronic cough": "Avoid irritants, hydrate. Seek evaluation if lasting >8 weeks.",
  "sore throat with fever": "Rest, fluids. Seek care if severe.",
  "tingling sensation": "Avoid pressure, maintain posture. Seek care if persistent.",
  "numbness": "Monitor area, avoid injury. Seek evaluation if sudden.",
  "migraine": "Rest in dark, hydrate. Seek care if severe.",
  "vertigo": "Sit/lie down, avoid sudden moves. Seek care if recurrent.",
  "low motivation": "Set small goals, engage in activities. Seek support if prolonged.",
  "social withdrawal": "Stay connected with friends/family. Seek support if persistent.",
  "mood depression": "Exercise, express feelings. Consult professional if prolonged.",
  "sunburn": "Cool compress, hydrate. Seek care if severe.",
  "fungal infection": "Keep area dry, use antifungal cream. Consult if persistent.",
  "psoriasis": "Moisturize, avoid triggers. Consult dermatologist for treatment.",
  "seborrheic dermatitis": "Use medicated shampoos. Consult if persistent.",
  "abdominal bloating": "Eat slowly, avoid gas foods. Seek care if persistent.",
  "acid indigestion": "Avoid spicy/fatty foods. Seek care if frequent.",
  "constipation with pain": "Increase fiber, hydrate. Seek care if severe.",
  "diarrhea with fever": "Hydrate, rest. Seek care if prolonged or with blood."
  // Saúde feminina adicionais
  "breast tenderness": "Use supportive bra, warm/cold compress. Consult doctor if persistent or lump present.",
  "hot flashes": "Stay cool, hydrate. Consult gynecologist if severe or affecting daily life.",
  "ovarian pain": "Track cycle, rest, apply heat. Seek evaluation if severe or persistent.",
 // Sintomas respiratórios
  "frequent yawning": "Check sleep quality, hydrate. Seek care if persistent.",
  "chest tightness at rest": "Rest, monitor. Seek urgent care if severe.",
  "sniffles": "Use saline drops, stay hydrated. Seek care if prolonged.",
  "short cough bursts": "Rest, avoid irritants. Consult doctor if persistent.",

  // Sintomas neurológicos
  "head heaviness": "Rest, hydrate, reduce stress. Seek care if persistent.",
  "slow thinking": "Take breaks, reduce workload. Seek evaluation if worsening.",
  "cold hands/feet sensations": "Keep warm, hydrate. Consult doctor if persistent.",
  "eye twitch": "Rest eyes, reduce caffeine. Seek care if frequent.",

  // Sintomas psicológicos
  "lack of focus": "Take short breaks, minimize distractions. Seek professional support if persistent.",
  "overthinking": "Practice mindfulness, journaling. Seek support if overwhelming.",
  "emotional instability": "Track triggers, maintain routine. Consult professional if persistent.",
  "low self-esteem": "Engage in positive activities, therapy if needed.",

  // Sintomas dermatológicos
  "dry scalp": "Use mild shampoo, moisturize. Consult dermatologist if persistent.",
  "dark under eyes": "Rest, hydrate, check sleep. Seek evaluation if persistent.",
  "chapped hands": "Moisturize regularly, protect skin. Consult if cracking persists.",
  "itchy feet": "Keep clean, dry, use antifungal cream. Consult if persistent.",

  // Sintomas digestivos
  "frequent gas": "Eat slowly, avoid carbonated drinks. Seek care if severe.",
  "heartburn after meals": "Eat smaller meals, avoid lying down. Seek care if persistent.",
  "mild nausea after eating": "Eat bland foods, hydrate. Seek evaluation if frequent.",
  "stomach gurgling": "Eat slowly, stay hydrated. Seek care if persistent.",

  // Sintomas musculoesqueléticos
  "calf cramps": "Stretch, hydrate. Seek care if frequent or severe.",
  "back stiffness": "Maintain posture, gentle stretching. Seek care if persistent.",
  "finger numbness": "Avoid pressure, rest. Seek evaluation if worsening.",
  "hip discomfort": "Stretch gently, rest. Consult doctor if persistent.",

  // Sintomas cardiovasculares
  "flushed face": "Rest, hydrate. Seek care if persistent or accompanied by other symptoms.",
  "cold sweats with exertion": "Rest, hydrate. Seek urgent care if severe.",
  "lightheadedness": "Sit/lie down immediately. Seek care if frequent.",
  "slow heartbeat": "Monitor, stay hydrated. Consult doctor if persistent.",

  // Saúde feminina
  "spotting between periods": "Track cycles, consult gynecologist if frequent.",
  "cramping before period": "Heat therapy, rest. Consult if severe.",
  "vaginal dryness": "Use moisturizers, stay hydrated. Consult gynecologist if persistent.",
  "breast lumps": "Monitor, consult doctor immediately.",

  // Saúde masculina
  "pain during urination": "Hydrate, monitor. Seek urologist if persistent.",
  "erectile difficulty": "Consult healthcare provider for evaluation.",
  "penile redness": "Keep area clean, monitor. Seek urologist if persistent.",
  "frequent urination": "Track frequency, hydrate. Consult doctor if persistent.",

  // Sintomas gerais
  "excessive yawning": "Check sleep quality, hydrate. Seek care if persistent.",
  "body chills": "Keep warm, hydrate. Seek care if severe or persistent.",
  "sweaty palms": "Relaxation techniques. Seek care if frequent or affecting daily life.",
  "sudden fatigue": "Rest, hydrate. Seek care if unexplained.",

  // Sintomas sensoriais
  "sensitivity to light": "Rest eyes, avoid bright lights. Seek care if persistent.",
  "tinnitus": "Avoid loud noises, rest. Seek evaluation if persistent.",
  "blurred vision with reading": "Rest, proper lighting. Seek care if persistent.",
  "ringing in ears": "Limit exposure to loud sounds. Consult if persistent.",

  // Sintomas imunológicos
  "frequent colds": "Rest, hydrate, maintain hygiene. Seek evaluation if persistent.",
  "swollen glands after infection": "Monitor, rest. Seek care if painful or prolonged.",
  "persistent sore throat": "Hydrate, avoid irritants. Consult doctor if recurrent.",
  "skin sensitivity": "Avoid harsh chemicals, moisturize. Consult dermatologist if persistent."{
  // Sintomas respiratórios
  "rapid breathing": "Rest, breathe slowly. Seek urgent care if persistent or severe.",
  "post-nasal drip": "Stay hydrated, use saline rinse. Consult doctor if prolonged.",
  "wheezing while exercising": "Warm up, avoid triggers. Seek care if persistent.",
  "frequent throat clearing": "Hydrate, avoid irritants. Consult doctor if persistent.",

  // Sintomas neurológicos
  "brain fog": "Rest, hydrate, reduce stress. Seek evaluation if persistent.",
  "difficulty concentrating": "Take breaks, prioritize tasks. Seek professional support if persistent.",
  "hand tremors": "Reduce caffeine, rest. Seek evaluation if worsening.",
  "facial numbness": "Monitor, avoid injury. Seek urgent care if sudden.",

  // Sintomas psicológicos
  "irritability in morning": "Get adequate sleep, relax. Seek support if persistent.",
  "emotional numbness": "Engage in activities, social support. Consult professional if persistent.",
  "nighttime anxiety": "Practice relaxation techniques. Seek mental health support if frequent.",
  "excessive worrying": "Journaling, mindfulness, reduce stress. Seek support if overwhelming.",

  // Sintomas dermatológicos
  "red patches": "Keep skin clean, avoid scratching. Consult dermatologist if persistent.",
  "peeling skin": "Moisturize, avoid harsh soaps. Seek care if widespread.",
  "ingrown nails": "Proper nail care, soak affected area. Consult podiatrist if painful.",
  "cold sores": "Avoid triggers, use antiviral creams. Consult doctor if frequent.",

  // Sintomas digestivos
  "early satiety": "Eat smaller meals, chew thoroughly. Consult doctor if persistent.",
  "bloody stool": "Seek medical evaluation immediately.",
  "frequent burping": "Eat slowly, avoid carbonated drinks. Seek care if persistent.",
  "acidic taste in mouth": "Avoid late-night meals, stay upright. Consult doctor if persistent.",

  // Sintomas musculoesqueléticos
  "knee instability": "Strengthen muscles, rest. Seek evaluation if recurrent.",
  "elbow pain": "Rest, apply ice/heat. Consult doctor if persistent.",
  "ankle swelling": "Elevate, rest, monitor. Seek care if painful.",
  "neck stiffness in morning": "Gentle stretching, correct posture. Seek evaluation if persistent.",

  // Sintomas cardiovasculares
  "high heart rate at rest": "Rest, hydrate, monitor. Seek urgent care if persistent.",
  "fainting spells": "Lay flat, avoid sudden movements. Seek evaluation immediately.",
  "cold extremities": "Keep warm, hydrate. Consult doctor if persistent.",
  "shortness of breath while lying down": "Elevate head, monitor. Seek care if worsening.",

  // Saúde feminina
  "irregular spotting": "Track cycles, consult gynecologist if frequent.",
  "painful ovulation": "Apply heat, rest. Seek evaluation if severe.",
  "breast swelling pre-period": "Supportive bra, track symptoms. Consult doctor if persistent.",
  "vaginal itching": "Maintain hygiene, avoid irritants. Consult gynecologist if persistent.",

  // Saúde masculina
  "penile discomfort": "Maintain hygiene, rest. Consult urologist if persistent.",
  "urinary dribbling": "Monitor symptoms, hydrate. Seek urologist if persistent.",
  "prostate discomfort": "Track symptoms, consult urologist if persistent.",
  "reduced semen volume": "Maintain healthy lifestyle, hydrate. Seek professional evaluation if persistent.",

  // Sintomas gerais
  "night sweats": "Keep room cool, hydrate. Seek evaluation if persistent.",
  "excessive thirst": "Hydrate, monitor intake. Consult doctor if persistent.",
  "low energy after meals": "Eat balanced meals, avoid overeating. Seek evaluation if persistent.",
  "frequent yawning during day": "Improve sleep quality, rest. Consult if persistent.",

  // Sintomas sensoriais
  "ringing ears in quiet": "Avoid loud noises, rest. Seek evaluation if persistent.",
  "sensitivity to sound": "Avoid loud environments. Consult doctor if persistent.",
  "visual floaters": "Monitor vision, avoid strain. Seek ophthalmologist if sudden increase.",
  "temporary blurred vision": "Rest eyes, hydrate. Seek evaluation if persistent.",

  // Sintomas imunológicos
  "frequent minor infections": "Maintain hygiene, rest, hydrate. Seek evaluation if persistent.",
  "swollen lymph nodes": "Monitor size, seek evaluation if persistent or painful.",
  "skin rashes after illness": "Keep skin clean, moisturize. Consult doctor if persistent.",
  "sore throat after exercise": "Hydrate, rest. Seek care if persistent."{
  // Sintomas respiratórios
  "shortness of breath on exertion": "Rest, avoid triggers. Seek care if persistent.",
  "coughing at night": "Elevate head, stay hydrated. Consult doctor if frequent.",
  "wheezing with cold": "Use inhaler if prescribed. Seek care if severe.",
  "nasal congestion with fever": "Hydrate, use saline spray. Seek care if persistent.",
  "frequent throat clearing": "Avoid irritants, hydrate. Consult doctor if persistent.",
  "chest tightness while exercising": "Rest, breathe slowly. Seek care if persistent.",
  "snoring loudly": "Sleep on side, maintain healthy weight. Consult doctor if severe.",
  "nosebleeds": "Pinch nose, lean forward. Seek care if frequent.",
  "chronic cough": "Avoid smoke, hydrate. Seek evaluation if lasting >8 weeks.",
  "sore throat with pain": "Rest, fluids, pain relief. Seek care if persistent.",
  "shortness of breath at night": "Elevate head, monitor. Seek care if worsening.",
  "post-nasal drip": "Hydrate, use saline rinse. Consult doctor if persistent.",
  "frequent sneezing": "Avoid allergens, maintain hygiene. Seek care if persistent.",
  "wheezing with exertion": "Warm up, rest. Seek care if persistent.",
  "difficulty breathing after cold": "Monitor symptoms. Seek care if worsening.",
  "tightness in throat": "Stay calm, hydrate. Seek urgent care if severe.",
  "cough with mucus": "Hydrate, rest. Seek care if color changes or persists.",
  "throat irritation": "Hydrate, avoid irritants. Seek care if persistent.",
  "frequent yawning": "Improve sleep quality, rest. Consult doctor if persistent.",
  "rapid breathing": "Rest, breathe slowly. Seek urgent care if persistent.",
  "post-cold fatigue": "Rest, hydrate, eat well. Consult doctor if persistent.",
  "nose congestion with itch": "Use saline spray, avoid irritants. Consult doctor if persistent.",
  "hoarseness": "Rest voice, hydrate. Seek evaluation if persistent >2 weeks.",
  "wheeze after exercise": "Warm up, avoid triggers. Seek care if frequent.",
  "short cough spells": "Hydrate, monitor. Seek care if persistent.",
  "throat tightness": "Stay calm, rest. Seek urgent care if severe.",
  "difficulty breathing in cold": "Wear warm clothing, rest. Seek care if persistent.",
  "snoring with pauses": "Consult sleep specialist.",
  "persistent cough after flu": "Hydrate, rest. Seek care if lasting >3 weeks.",
  "runny nose with fever": "Hydrate, rest. Seek care if high or prolonged.",

  // Sintomas neurológicos
  "headache after screen time": "Rest eyes, hydrate. Take mild pain relievers.",
  "migraine with aura": "Rest in dark room, hydrate. Seek care if severe.",
  "dizziness when standing": "Rise slowly, hydrate. Consult doctor if frequent.",
  "vertigo": "Sit or lie down, avoid sudden moves. Seek care if recurrent.",
  "hand tremors": "Reduce caffeine, rest. Seek evaluation if worsening.",
  "facial numbness": "Monitor, avoid injury. Seek urgent care if sudden.",
  "brain fog": "Rest, hydrate, reduce stress. Seek evaluation if persistent.",
  "difficulty concentrating": "Take breaks, prioritize tasks. Seek professional support if persistent.",
  "short-term memory loss": "Keep notes, rest. Seek evaluation if frequent.",
  "tingling sensation in limbs": "Avoid pressure, maintain posture. Seek care if persistent.",
  "numbness in fingers": "Avoid injury, monitor. Seek evaluation if sudden.",
  "confusion": "Ensure safety, monitor. Seek urgent care if sudden.",
  "loss of coordination": "Avoid risky activities. Seek evaluation if persistent.",
  "sleepiness during day": "Maintain sleep schedule. Seek evaluation if persistent.",
  "frequent headaches": "Rest, hydrate, avoid triggers. Seek care if severe.",
  "dizziness with movement": "Sit down immediately. Seek evaluation if recurrent.",
  "fainting spells": "Lay flat, elevate legs. Seek medical evaluation.",
  "weakness in limbs": "Rest, hydrate. Seek evaluation if unexplained.",
  "muscle twitching": "Reduce stress, hydrate. Consult doctor if persistent.",
  "difficulty speaking": "Stay calm, seek urgent care if sudden.",
  "memory loss with fatigue": "Rest, write notes. Seek evaluation if worsening.",
  "tremors": "Rest, reduce stress. Consult doctor if persistent.",
  "vertigo with nausea": "Sit, hydrate. Seek care if frequent or severe.",
  "headache with fever": "Rest, hydrate, pain relief. Seek evaluation if persistent.",
  "dizziness after standing": "Rise slowly, hydrate. Seek evaluation if frequent.",
  "balance problems": "Use support, avoid risky moves. Seek care if persistent.",
  "tingling lips": "Monitor, avoid irritation. Seek care if persistent.",
  "numbness in feet": "Avoid injury, elevate. Seek evaluation if persistent.",
  "muscle weakness after illness": "Rest, hydrate, nutrition. Seek care if persistent.",
  "lightheadedness": "Sit down immediately. Seek care if recurrent.",

  // Sintomas psicológicos
  "low motivation": "Set small goals, engage in activities. Seek support if prolonged.",
  "social withdrawal": "Stay connected. Seek professional support if persistent.",
  "mood swings": "Track triggers, maintain routine. Consult mental health professional if disruptive.",
  "anxiety episodes": "Practice relaxation, deep breathing. Seek support if persistent.",
  "panic attacks": "Controlled breathing, safe environment. Seek mental health support if frequent.",
  "depression": "Talk to someone trusted. Seek professional support if prolonged.",
  "irritability": "Stress management, adequate sleep. Seek help if persistent.",
  "apathy": "Engage in activities. Seek professional support if prolonged.",
  "insomnia": "Regular sleep schedule, calm environment. Seek care if persistent.",
  "nighttime anxiety": "Relaxation techniques. Seek support if frequent.",
  "low self-esteem": "Positive reinforcement, social support. Seek counseling if persistent.",
  "excessive worrying": "Journaling, mindfulness. Seek professional support if persistent.",
  "emotional numbness": "Engage socially, seek professional support if persistent.",
  "obsessive thoughts": "Distraction techniques, therapy. Seek mental health support.",
  "mood depression": "Exercise, express feelings. Consult professional if prolonged.",
  "stress at work": "Breaks, relaxation, social support. Seek professional help if persistent.",
  "fatigue due to mental stress": "Rest, mindfulness, balanced routine. Seek support if persistent.",
  "loss of interest": "Engage in hobbies, social interactions. Seek help if persistent.",
  "irritability in mornings": "Adequate sleep, relaxation. Consult support if persistent.",
  "excessive fear": "Practice exposure, therapy. Seek support if persistent."{
  // Sintomas respiratórios
  "chest congestion": "Use humidifier, hydrate. Seek care if persistent.",
  "persistent wheeze": "Avoid triggers, follow inhaler plan. Seek evaluation if frequent.",
  "frequent hiccups": "Slow breathing, sip water. Seek care if prolonged.",
  "difficulty swallowing": "Eat slowly, avoid hard foods. Seek medical evaluation if persistent.",
  "hoarse voice": "Rest voice, hydrate. Seek evaluation if prolonged.",
  "dry throat": "Hydrate, use lozenges. Seek care if persistent.",
  "short rapid breaths": "Rest, sit upright. Seek urgent care if severe.",
  "cough after exercise": "Hydrate, warm-up properly. Seek evaluation if persistent.",
  "sniffles with fatigue": "Rest, hydrate. Seek care if prolonged or severe.",
  "wheezing at night": "Elevate head, avoid triggers. Consult doctor if frequent.",

  // Sintomas neurológicos
  "lightheadedness after standing": "Rise slowly, hydrate. Seek care if frequent.",
  "difficulty focusing": "Take breaks, reduce screen time. Seek evaluation if persistent.",
  "head pressure": "Rest, hydrate. Seek care if severe or sudden.",
  "numb tongue": "Monitor, avoid injury. Seek urgent care if sudden.",
  "eye twitches": "Rest eyes, reduce caffeine. Seek evaluation if persistent.",
  "memory lapses under stress": "Keep notes, reduce stress. Seek professional support if frequent.",
  "neck stiffness with headache": "Stretch gently, rest. Consult doctor if severe.",
  "dizziness with head movement": "Sit/lie down, avoid sudden moves. Seek care if recurrent.",
  "muscle spasms in neck": "Gentle stretching, hydrate. Seek evaluation if persistent.",
  "pins and needles in arms": "Adjust posture, rest. Seek medical evaluation if persistent.",

  // Sintomas psicológicos
  "overthinking": "Mindfulness, journaling. Seek support if persistent.",
  "emotional fatigue": "Rest, relax, social interaction. Seek support if persistent.",
  "nervousness before events": "Deep breathing, preparation. Seek help if frequent.",
  "fear of crowds": "Gradual exposure, therapy. Seek support if severe.",
  "persistent sadness": "Talk to someone trusted. Seek mental health professional if prolonged.",
  "difficulty relaxing": "Meditation, gentle activity. Consult professional if persistent.",
  "low self-confidence": "Positive reinforcement, therapy. Seek support if persistent.",
  "irritability with noise": "Reduce exposure, rest. Seek help if persistent.",
  "frequent mood swings": "Track triggers, maintain routine. Seek professional evaluation if severe.",
  "social anxiety": "Gradual exposure, therapy. Seek support if persistent.",

  // Sintomas dermatológicos
  "itchy scalp": "Use gentle shampoo, moisturize. Consult dermatologist if persistent.",
  "dry lips": "Hydrate, use lip balm. Seek care if persistent or cracking.",
  "skin peeling": "Moisturize, avoid harsh soaps. Consult dermatologist if severe.",
  "red spots on skin": "Keep clean, monitor. Seek care if spreading.",
  "sensitive skin reactions": "Avoid irritants. Consult dermatologist if persistent.",
  "sebaceous cyst": "Keep area clean, monitor. Seek evaluation if painful.",
  "ringworm": "Use antifungal cream, keep area dry. Consult dermatologist if persistent.",
  "eczema flare-ups": "Moisturize, avoid triggers. Seek care if worsening.",
  "dry hands": "Moisturize regularly. Consult dermatologist if cracking.",
  "skin rashes with itch": "Avoid scratching, keep clean. Seek care if spreading.",

  // Sintomas digestivos
  "frequent belching": "Eat slowly, avoid carbonated drinks. Seek care if persistent.",
  "heartburn after meals": "Avoid large/fatty meals. Elevate head while lying. Seek care if frequent.",
  "stomach gurgling": "Eat slowly, hydrate. Seek care if painful or persistent.",
  "frequent burping": "Avoid swallowing air, eat slowly. Seek evaluation if persistent.",
  "food intolerance reactions": "Identify triggers, avoid foods. Seek evaluation if severe.",
  "acid reflux at night": "Eat smaller meals, elevate head. Seek care if persistent.",
  "bloating after meals": "Eat slowly, avoid gas-producing foods. Consult doctor if persistent.",
  "nausea after eating": "Eat bland foods, hydrate. Seek care if persistent.",
  "loose stools": "Hydrate with electrolytes, rest. Seek care if persistent.",
  "constipation after travel": "Increase fiber, hydrate, gentle activity. Consult doctor if persistent.",

  // Sintomas musculoesqueléticos
  "ankle swelling": "Elevate, rest. Seek evaluation if persistent.",
  "knee stiffness": "Gentle movement, stretch. Seek care if severe.",
  "back muscle spasm": "Rest, heat application. Consult doctor if persistent.",
  "joint cracking": "Gentle movement, monitor. Seek evaluation if painful.",
  "muscle soreness after exercise": "Rest, hydrate, gentle stretching. Seek care if severe.",
  "hand stiffness": "Stretch gently, hydrate. Seek care if persistent.",
  "foot cramps": "Stretch, hydrate. Seek care if frequent.",
  "neck tension": "Stretch, posture correction. Seek evaluation if persistent.",
  "wrist pain": "Rest, avoid repetitive movements. Seek care if persistent.",
  "hip discomfort": "Gentle stretching, rest. Seek evaluation if severe.",

  // Sintomas cardiovasculares
  "rapid heartbeat": "Rest, monitor. Seek urgent care if persistent.",
  "low blood pressure symptoms": "Hydrate, rest. Seek evaluation if frequent.",
  "swelling in legs/ankles": "Elevate, limit standing. Consult doctor if persistent.",
  "chest tightness with exertion": "Rest, monitor. Seek urgent care if severe.",
  "cold hands/feet": "Keep warm, hydrate. Seek care if persistent.",
  "dizziness with exertion": "Rest, hydrate. Seek evaluation if frequent.",
  "palpitations with stress": "Relaxation, deep breathing. Seek care if frequent.",
  "fainting spells": "Lay flat, elevate legs. Seek medical evaluation.",
  "chest heaviness": "Rest, monitor. Seek urgent care if severe.",
  "irregular heartbeat": "Monitor, rest. Seek urgent evaluation if persistent.",

  // Saúde feminina
  "irregular periods": "Track cycles, consult gynecologist if abnormal.",
  "breast lumps": "Self-examine, consult doctor if present.",
  "painful periods": "Heat therapy, rest, OTC pain relief. Consult doctor if severe.",
  "vaginal dryness": "Hydrate, use lubricant. Consult gynecologist if persistent.",
  "menstrual spotting": "Track, consult doctor if persistent or abnormal.",
  "PMS symptoms": "Track symptoms, lifestyle changes. Seek care if severe.",
  "ovarian cyst pain": "Monitor, rest. Consult gynecologist if persistent.",
  "hot flashes": "Stay cool, hydrate. Consult gynecologist if severe.",
  "urinary tract discomfort": "Hydrate, monitor. Consult doctor if persistent.",
  "breast tenderness": "Supportive bra, warm compress. Seek care if persistent.",

  // Saúde masculina
  "prostate discomfort": "Monitor urinary symptoms. Consult urologist if persistent.",
  "testicular swelling": "Monitor, rest. Seek urologist if persistent.",
  "erectile difficulty": "Maintain lifestyle, consult doctor if persistent.",
  "low testosterone symptoms": "Exercise, diet, seek endocrinologist if persistent.",
  "urinary urgency": "Hydrate, monitor. Seek urologist if frequent.",
  "painful ejaculation": "Monitor, consult urologist if persistent.",
  "scrotal pain": "Rest, avoid trauma. Seek urologist if persistent.",
  "reduced libido": "Maintain health, reduce stress. Consult professional if persistent.",
  "urinary hesitancy": "Monitor, hydrate. Consult urologist if frequent.",
  "prostate enlargement": "Track symptoms, consult urologist if present."{
  // Sintomas respiratórios
  "chest tightness when lying down": "Sit upright, breathe slowly. Seek care if persistent.",
  "frequent yawning": "Rest, hydrate. Consult doctor if persistent.",
  "breathlessness while talking": "Pause and rest. Seek urgent care if severe.",
  "chronic nasal drip": "Hydrate, use saline spray. Consult doctor if persistent.",
  "sudden cough attacks": "Sit upright, hydrate. Seek medical attention if severe.",
  "noisy breathing": "Monitor, avoid irritants. Seek care if persistent.",
  "loss of smell": "Avoid irritants, monitor. Seek evaluation if persistent.",
  "loss of taste": "Monitor, maintain hydration. Consult doctor if persistent.",
  "dry cough at night": "Hydrate, elevate head. Seek evaluation if persistent.",
  "wheeze on exertion": "Warm up, avoid triggers. Seek evaluation if persistent.",

  // Sintomas neurológicos
  "temporary vision blurring": "Rest, reduce screen time. Seek care if frequent.",
  "trembling hands": "Rest, reduce stress. Consult doctor if persistent.",
  "facial numbness": "Monitor, avoid injury. Seek urgent care if sudden.",
  "muscle twitching": "Hydrate, rest. Seek evaluation if persistent.",
  "coordination issues": "Avoid risky activity, seek evaluation if worsening.",
  "frequent headaches with light sensitivity": "Rest, reduce light exposure. Consult doctor if persistent.",
  "dizziness after meals": "Sit, hydrate. Seek care if recurrent.",
  "slurred speech episodes": "Monitor, avoid stress. Seek urgent care if frequent.",
  "difficulty writing": "Take breaks, reduce strain. Seek evaluation if persistent.",
  "confusion after sleep deprivation": "Rest, hydrate. Seek evaluation if recurrent.",

  // Sintomas psicológicos
  "apathy towards hobbies": "Engage in activities, set goals. Seek support if persistent.",
  "persistent worry": "Mindfulness, journaling. Seek professional help if severe.",
  "fear of leaving home": "Gradual exposure, therapy. Seek support if persistent.",
  "difficulty concentrating": "Take breaks, reduce distractions. Seek help if frequent.",
  "mood swings after sleep deprivation": "Regular sleep schedule. Seek support if persistent.",
  "emotional numbness": "Engage in social activities. Consult mental health professional if persistent.",
  "fear of social interaction": "Gradual exposure, therapy. Seek support if persistent.",
  "panic with public speaking": "Preparation, breathing exercises. Seek professional support if frequent.",
  "irritability with minor stressors": "Relaxation techniques, rest. Seek support if persistent.",
  "loss of interest in work": "Set small achievable tasks. Seek professional support if persistent.",

  // Sintomas dermatológicos
  "rash with fever": "Keep clean, monitor. Seek care if spreading or severe.",
  "itchy rash after contact with plants": "Wash area, apply cool compress. Seek care if persistent.",
  "red itchy bumps on arms": "Avoid scratching, hydrate. Consult dermatologist if persistent.",
  "dark spots on skin": "Monitor, use sunscreen. Consult dermatologist if changing.",
  "skin dryness in winter": "Moisturize, avoid hot showers. Seek care if cracking.",
  "scaly patches on elbows": "Moisturize, avoid irritants. Consult dermatologist if persistent.",
  "itchy feet": "Keep dry, antifungal cream. Consult dermatologist if persistent.",
  "blistering after sun exposure": "Cool compress, hydrate. Seek care if severe.",
  "pale skin": "Monitor diet, rest. Seek medical evaluation if persistent.",
  "skin redness with heat": "Cool compress, hydrate. Seek care if persistent.",

  // Sintomas digestivos
  "frequent burping after meals": "Eat slowly, avoid carbonated drinks. Consult doctor if persistent.",
  "stomach rumbling with discomfort": "Eat slowly, hydrate. Seek care if persistent.",
  "nausea with strong odors": "Avoid triggers, hydrate. Seek care if persistent.",
  "abdominal cramps after meals": "Eat smaller portions, hydrate. Seek evaluation if frequent.",
  "vomiting after food": "Hydrate in small sips, rest. Seek care if frequent.",
  "frequent gas": "Avoid gas-producing foods, hydrate. Consult doctor if persistent.",
  "loss of appetite after illness": "Eat small meals, hydrate. Seek care if prolonged.",
  "loose stools after travel": "Hydrate with electrolytes. Consult doctor if persistent.",
  "constipation with bloating": "Increase fiber, hydrate, gentle exercise. Seek care if persistent.",
  "stomach heaviness after meals": "Eat slowly, avoid fatty foods. Seek care if persistent.",

  // Sintomas musculoesqueléticos
  "pain in lower back when sitting": "Adjust posture, stretch. Consult doctor if persistent.",
  "knee swelling after exercise": "Rest, elevate, ice. Seek care if persistent or painful.",
  "shoulder pain when lifting": "Rest, gentle stretching. Consult doctor if severe.",
  "ankle stiffness in the morning": "Stretch gently, hydrate. Seek care if persistent.",
  "wrist discomfort from typing": "Take breaks, adjust posture. Seek care if persistent.",
  "muscle fatigue after walking": "Rest, hydrate, gentle stretching. Seek care if persistent.",
  "thigh cramps at night": "Stretch before bed, hydrate. Seek evaluation if frequent.",
  "joint warmth and redness": "Rest, cold compress. Seek care if persistent.",
  "foot pain when standing long": "Elevate, rest. Consult podiatrist if persistent.",
  "neck soreness after sleeping": "Adjust pillow, stretch. Seek care if persistent.",

  // Sintomas cardiovasculares
  "rapid pulse after mild activity": "Rest, monitor. Seek care if persistent.",
  "low energy with exertion": "Hydrate, rest. Consult doctor if persistent.",
  "pale lips": "Monitor circulation, hydrate. Seek evaluation if persistent.",
  "fainting after standing": "Lay flat, elevate legs. Seek medical attention.",
  "chest tightness with stress": "Relaxation, deep breathing. Seek urgent care if severe.",
  "lightheadedness after exertion": "Rest, hydrate. Seek evaluation if frequent.",
  "swollen feet after work": "Elevate, limit standing. Consult doctor if persistent.",
  "irregular pulse": "Monitor, rest. Seek urgent care if persistent.",
  "cold extremities": "Keep warm, hydrate. Seek evaluation if persistent.",
  "pressure in chest when anxious": "Deep breathing, relaxation. Seek care if frequent.",

  // Saúde feminina
  "pain during intercourse": "Monitor, use lubrication. Consult gynecologist if persistent.",
  "unusual vaginal odor": "Maintain hygiene. Seek evaluation if persistent.",
  "heavy menstrual flow": "Track cycle, consult gynecologist if persistent.",
  "spotting between periods": "Monitor cycles, consult gynecologist if persistent.",
  "breast changes during cycle": "Monitor, consult doctor if unusual.",
  "pelvic pressure": "Rest, monitor. Seek evaluation if persistent.",
  "menstrual migraines": "Track cycle, rest. Seek care if severe.",
  "breast skin changes": "Monitor, consult doctor if persistent or unusual.",
  "vaginal itching": "Maintain hygiene, consult gynecologist if persistent.",
  "painful urination": "Hydrate, monitor. Seek care if persistent.",

  // Saúde masculina
  "prostate pain with urination": "Monitor, consult urologist if persistent.",
  "testicular heaviness": "Monitor, rest. Consult urologist if persistent.",
  "erectile issues under stress": "Relaxation, maintain lifestyle. Seek doctor if persistent.",
  "low sperm count": "Monitor health, diet, consult urologist if persistent.",
  "urinary dribbling": "Hydrate, monitor. Consult urologist if frequent.",
  "scrotal swelling": "Elevate, rest. Consult urologist if persistent.",
  "painful ejaculation under stress": "Monitor, consult urologist if persistent.",
  "reduced sexual desire": "Maintain lifestyle, reduce stress. Seek evaluation if persistent.",
  "frequent nighttime urination": "Hydrate earlier, monitor. Consult urologist if frequent.",
  "prostate enlargement symptoms": "Monitor, consult urologist if persistent."
  // Saúde masculina adicionais
  "testicular pain": "Rest, avoid trauma. Seek urologist if persistent or severe.",
  "urinary urgency": "Hydrate, monitor symptoms. Consult urologist if frequent or painful.",
  "low libido": "Maintain healthy lifestyle, reduce stress. Seek professional evaluation if persistent."

};

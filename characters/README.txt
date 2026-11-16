CHARACTERS KAISE ADD KARNE HAIN (poori body wale)
==================================================
Har character ke liye ek tasveer chahiye: POORI BODY, seedha samne, PEECHE BACKGROUND NAHI (transparent).
  - Format: WEBP ya PNG (transparent), shape lambi: 9:20 (jaise 540 x 1200 pixel). Paon neeche, sar upar.
  - Chhoti thumbnail (chehre wali, 150x180): grid ke liye.

characters.json mein har character ka ek khana:
  { "id":"f1", "gender":"female", "name":"Grace",
    "image":"characters/f1.webp", "thumb":"characters/f1_thumb.webp", "mode":"body",
    "skin":"#fbd0c0",
    "eyes":[ {"x":0.4454,"y":0.1008,"w":0.0481,"h":0.0158}, {"x":0.55,"y":0.1008,"w":0.0481,"h":0.0158} ] }
  - "gender": "female" ya "male"
  - "eyes": dono aankhon ki jagah (tasveer ke hisse mein 0 se 1): x,y = aankh ka beech, w,h = chaudai/unchai.
    Isi se palkein jhapakti hain. Na likho to bhi chalega (bas palkein nahi jhapkengi).
  - "skin": aankh ke aas-paas ki jild ka rang (palak band karne ke liye).
Agar tum sirf tasveer bhejo, main background hata ke, aankhon ki jagah naap ke ye sab khud bana dunga.

Video wale character (agar kabhi chaho): "idle" (seamless loop) aur "talk" MP4 ka link do, "image" poster hoga.
Sirf wahi tasveer/video use karo jinke aap ke paas haq hon.

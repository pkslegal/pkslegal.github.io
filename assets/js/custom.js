	
/*scrolling banner*/
(function ($) {
  "use strict";

	 $(document).ready(function(){
		 $('.testimonial-carousel' ).owlCarousel({
		    items: 3,
		    nav: true,
		    loop :true,
		   
		    mouseDrag: true,
		    responsiveClass: true,
        autoplay: true,
		    navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
		    responsive: {
		        0:{
		          items: 1
		        },
		        480:{
		          items: 1
		        },
		        767:{
		          items: 2
		        },
		        992:{
		          items: 3
		        },
		        1200:{
		          items: 3
		        }
		    }
		  });

	 });



	$(document).ready(function(){
	    $('.client-carousel').owlCarousel({
	        items: 4,
	        nav: true,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
          autoplay: true,
	        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 1
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            },
	            1200:{
	              items: 5
	            }
	        }
	    });
	});  


	$(document).ready(function(){
	    $('.services-carousel').owlCarousel({
	        items: 4,
	        nav: true,
	        dots: false,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
	        autoplay: true,
	        autoplayTimeout: 3000,
	        autoplayHoverPause: true,
	        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 1
	            },
	            767:{
	              items: 2
	            },
	            992:{
	              items: 2
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});  
})(jQuery); 




// Testimonial Loop Array

const TestimonialsItems = [
	{
		name: "Akassh Patel",
		testi: "Arpit ji is perfect lawyer for any criminal & Cyber matters. I am highly satisfied with the way he handled my all 3 cases. He understand the matter very carefully & give out of box solutions to it. His client first approach is extremely helpful. He supported me in my toughest time. I highly recommend him for Kolkata & West bengal cases.",
	},
	{
		name: "Rahul Das",
		testi: "I got the best advice, in my crisis time. Sir is very helpfull and alwyz opne to hear your problem.. Thank u so much Sir for your support.",
	},
	{
		name: "Mohammed Aadil",
		testi: "The best Advocate in Kolkata region with golden heart and he takes care of my legal issues with utmost concern and he is so down to earth person. I always felt comfortable and gained confidence while reaching to him. He understands the client’s need and talks about the feasible option to solve our problem. Lastly he always charges the nominal fee without any greed and attitude.May Almighty give you more strength and opportunity to support the society. Thank you sir!",
	},
	{
		name: "Anjan Roy",
		testi: "He is the best young advocate . For instant solutions and suggestions the best person to consult.",
	},
	{
		name: "Abhishek Banerjee",
		testi: "Mr Arpit is a through professional...He dealt our case with utmost priority and provided us with the peace of mind. I would highly recommend him to my peers for legal services and will consult him only , regarding any legal matters going forward.",
	},
	{
		name: "Ritabrata Mukherjee",
		testi: "New age smart lawyer. Well behaved and reliable. Had an amazing experience while working on a property deal.",
	},
	{
		name: "Ankur Ghosh",
		testi: "It was our first legal case and we were extremely guided well by Mr. Arpit Saha. Firstly, he listened and understood our problems thoroughly and then guided us the best possible way through which we got a positive outcome just in 6 months. Thank you, Arpit Babu!",
	},
	{
		name: "Sagata Das",
		testi: "He is very professional and good at his job.He was so fast in providing me a deed document and man of his words.Really looking forward to complete many more legal formalities from him.",
	},
	{
		name: "Debojeet Das",
		testi: "Mr. Arpit is a legitimate proficient. He took care of our case with the greatest possible level of desperation and gave us inner serenity. I would firmly recommend him to my friends for legitimate administrations, and pushing forward, I will solely counsel him for any lawful worries. Thanks you so much.",
	},
	{
		name: "Neha Bajoria kedia",
		testi: "He is expert in his services with lot of high contacts and having a fine legacy in advocating.",
	},
	{
		name: "Abhishek Arora",
		testi: "excellent, very fast delivery on very minimum fees. Best lawyer i have ever meet. I am from uttrakhand and He my best lawyer didn't even let me present in the kolkata court, he saved many of my costs and i will keep mentioning my experiences with my this best lawyer in his this reviews  chart for all my up coming dates.",
	},
	{
		name: "Anisha Singh",
		testi: "Thankfully advocate sir understood my urgency of the situation and did my affidavit work in  best and the fastest way possible, 10 on 10 for legal services and plus 1 for humbleness, 100% recommended from my side !",
	},
	{
		name: "Atul Gupta",
		testi: "I found Arpit as a most competent advocate and a gem of a person as well.....",
	},
	{
		name: "Santanu Ghosh",
		testi: "I had done my  internship in the firm, first time I have done internship in the law firm. I can say one Most good thing that is sir is very efficient and friendly. Sir always supported me and I have learned drafting and pleading,  case research,  filing of petition so many things from the firm. All advocates are very supportive and efficient. When I was working in this firm, I have seen that all cases are important in this firm. Clients are happy when they come in this firm.",
	},
	{
		name: "Ashi 3247",
		testi: "Pks legal services provided excellent services of court proceedings to me. Arpit Kumar Saha handled my case very smoothly and seriously by taking personal pains in listening to me carefully. Fees charged was also very nominal. Wishing him and his company great success and prosperity.",
	},
	{
		name: "Ajay Kumar",
		testi: "PKS legal Advocates has been my lawyer for over two years and has done an excellent job in not only fighting FOR me, but also PROTECTING my interests! I highly recommend him for any family court needs you might have.",
	},
	{
		name: "Indranil Mukherjee",
		testi: "Service by PKS legal advocates &  associates is impressive. He is very polite and humble in dealing with the customer. Made the procedure understandable in a very easy way. Response is very quick and clear cut summarization of the facts of the issue. Highly recommended.",
	},
	{
		name: "Jayanta Mitra",
		testi: "I had a somehow bad notion about Professional Law Firms in Kolkata, regarding the exhorbitant professional fees charged by them, for their professional services to their clients. However my notion changed completely after meeting Advocate Arpit Saha of PKS Legal Advocates in his Kalikapur Chamber. 		Not only has he provided excellent and fruitful professional legal services for my Cases,but has also charged me reasonably. I recommend  all those seeking good Law Firms in Kolkata at reasonable rates.",
	},
	{
		name: "Sudipta Banerjee",
		testi: "I have visited recently.He has listen to my problems carefully..I am fully satisfied with his legal advice.. Thank you sir...",
	},
	{
		name: "Kaushik Das",
		testi: "I contacted Mr Arpit K Saha over telephone just on the penultimate day of Durga Puja vacation for an issue related to cyber crime.Some fake identities kept on threatening for money over G PAY etc. He not only acted promptly but initiated a legal case with the matter. His approach was thoroughly professional",
	},
	{
		name: "Sarika Maurya",
		testi: "I availed service of Advocate Arpit Saha... he did his work very well and efficiently... He is very kind, genuine and has empathetic nature...God bless him and his family...Respect from my side.",
	},
	{
		name: "Romit Bhaumik",
		testi: "The Team of PKS Legal Advocates & Association is the best legal farm as known. Every person here is very knowledgeable and understanding. I am fully satisfied with them.",
	},
	{
		name: "Evana Mallick",
		testi: "I applied for one month internship and trust me it was so good. Learnt how to draft LOR writing bail and put up petition and so on. Indeed a experience one should opt for!",
	},
	{
		name: "Koyel Saha",
		testi: "PKS Legal services has been very helpful during my crucial time, they make sure to solve cases seamlessly with all the expertise. I would highly recommend them for your legal advisory.",
	},
	{
		name: "Sujoy Saha",
		testi: "Very experienced and helping professional. Everything is very clear. He is mainly looking after criminal cases, warrant execution,cyber crime, Property registration, Bail and anticipatory bail, Company NCLT matters etc. I will recommend this firm to anyone who is seeking help for a lawyer.",
	},
	{
		name: "Pankaj Kumar Dutta",
		testi: " Professionalism, Quality, Responsiveness, Value Best cyber crime advocate in kolkata Saved my money from bank fraud.",
	},
	{
		name: "Shilpa Ghosal",
		testi: "One can surely get expert guidance regarding, criminal and sessions court cases, Property and Civil Cases, Cyber crime, Bail and Anticipatory bail, Company NCLT matters. Reliable and highly professional legal advocate.",
	},
	{
		name: "Raaj Kumar",
		testi: "Had very good experience and nice people very professional firm",
	},
	{
		name: "Dr SK Roy",
		testi: "I am highly impressed with the efficient professional legal services provided by PKS Legal Advocates relating to my legal matters.They have also charged me legibly for the efficient and effective professional services provided.I emrecommend PKS Legal Advocates to all those seeking efficient legal services at legible rates.",
	},
	{
		name: "Tam B",
		testi: "Excellent service, thank you so much for getting my case sorted in such a short time, very much appreciated.. I will contact you for any legal counseling requirement in future.",
	},
	{
		name: "Keshab Hira",
		testi: "I liked the response from this firm. The helpful attitude was wonderful. There was also a personal angle to the responses. The lawyer was good. Looking forward to a positive windup of my case. Thank you.",
	},
	{
		name: "Farhana Yasmin",
		testi: "Received very prompt response. Best services with positive professional approach and behaviour.",
	},
	

	{
		name: "Dipanjan Banerjee",
		testi: "This legal team is aggressive and exactly the kind of team that you would need on your side.",
	},
	{
		name: "Mohammed Aadil",
		testi: "The best Advocate in Kolkata region with golden heart and he takes care of my legal issues with utmost concern and he is so down to earth person. I always felt comfortable and gained confidence while reaching to him. He understands the client’s need and talks about the feasible option to solve our problem. Lastly he always charges the nominal fee without any greed and attitude.May Almighty give you more strength and opportunity to support the society. Thank you sir!",
	},
	{
		name: "Tonmoy Dhar",
		testi: "Quick service. Excellent behaviour & great consultation.",
	},
	{
		name: "Keshab Hira",
		testi: "The service here is very helpful, professional and prompt. Those in authority make sure that the clients are satisfied from the word go. As the service concerned is related to law the people concerned make it as less hassle-free possible and that is a difference.",
	},
	{
		name: "Ashish",
		testi: "He is very good lawyer. I am from Bangalore and I met him accidently during my hearing. I was cheated by first lawyer but Arpit has taken up my case and close it. If u are from other cities you can trust him without visiting as well.",
	},
	{
		name: "Anjan Roy",
		testi: "He is the best young advocate . For instant solutions and suggestions the best person to consult.",
	},
	{
		name: "Jayanta Mitra",
		testi: "I had a somehow bad notion about Professional Law Firms in Kolkata, about the exhorbitant professional fees charged by them.However, my notion changed completely ,after getting in touch with PKS Advocates Legal Firm in Kolkata, for my Cases. Not only Advocate Arpit Saha has provided effective and efficient legal services for my cases,but also has charged me reasonably. I highly recommend those seeking good Lawyers Firm in Kolkata at reasonable rates.",
	},
	{
		name: "Tathagata Bhattacharya",
		testi: "Thanks a lot sir for your start to win guidance in my consumer case. I'm more than just satisfied and overwhelmed with your astonishing knowledge on the practical field. Hope to get helped in future as well.",
	},
	{
		name: "Priyanka Dey",
		testi: "I got immense help from him....He is a very trusted person and helpfyl.One can rely on him for work. A lawyer in real terms who can understand the situation and needs of his clients...",
	},
]

// Mobile Only
const TestimonialContainer = document.querySelector('#testicontainer');

for (const value of Object.values(TestimonialsItems)) {
  console.log(value.name);
  const newCard = document.createElement('div');
  newCard.classList.add('card', 'testimonial-box');
  const cardHtml = `
    <div class="card-body">
      <h5 class="client-name">${value.name}</h5>
      <p class="client-talk">${value.testi}</p>
    </div>
  `;

  TestimonialContainer.appendChild(newCard);
  newCard.innerHTML = cardHtml;
}

// Desktop
const DesktopTestimonialContainer = document.querySelector('#DesktopTestimonialContainer');

for (let i = 0; i < TestimonialsItems.length; i += 2) {
  const newItem = document.createElement('div');
  newItem.classList.add('item');


  const firstCard = document.createElement('div');
  firstCard.classList.add('card', 'testimonial-box');
  const firstCardHtml = `
    <div class="card-body">
      <h5 class="client-name">${TestimonialsItems[i].name}</h5>
      <p class="client-talk">${TestimonialsItems[i].testi}</p>
    </div>
  `;
  firstCard.innerHTML = firstCardHtml;
  newItem.appendChild(firstCard);


  if (i + 1 < TestimonialsItems.length) {
    const secondCard = document.createElement('div');
    secondCard.classList.add('card', 'testimonial-box');
    const secondCardHtml = `
      <div class="card-body">
        <h5 class="client-name">${TestimonialsItems[i + 1].name}</h5>
        <p class="client-talk">${TestimonialsItems[i + 1].testi}</p>
      </div>
    `;
    secondCard.innerHTML = secondCardHtml;
    newItem.appendChild(secondCard);
  }

  DesktopTestimonialContainer.appendChild(newItem);
}



// Hide offcanvas menu when nav link is clicked
$('.offcanvas .menuLink').on('click', function() {
	$('.offcanvas').removeClass('show');
	$('.offcanvas-backdrop').removeClass('show');
	$('#offcanvasNav').css('visibility', 'hidden');
	$("#offcanvasNav").removeAttr('role');
  });









//Script to display the notification box on page load 
$(document).ready(function(){
    $('.notification-box').fadeIn('slow');
  });

  // Script to close the notification box on "Agree" or "Disagree" button click
  $('.agree-btn, .disagree-btn').click(function(){
    $('.notification-box').fadeOut('slow');
  });

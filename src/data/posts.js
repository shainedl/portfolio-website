const posts = [
    {
        'id': 'CT',
        'title': 'Cornell Tech CS Masters',
        'description': 'A Guide for Prospective Students',
        'date': 'May 29, 2020',
        /*Image sourced*/
        'image': 'https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/Cornell%20Tech%20Campus%205%20CREDIT%20IWAN%20BAAN.jpg?itok=EUrC7iTe',
        'sections': [
            {
                'question':'Why are you writing this post?',
                'answer':'I graduated from Cornell Tech a year ago with a Masters in Computer Science. During my time there, I was a Student Ambassador and led tours and panels for prospective students. Since then, a handful of prospectives reached out to me to ask questions. I would like to answer their most common questions. I had a great experience at Cornell Tech, and I would like to share it with you!'
            },
            {
                'question':'What made you choose Cornell Tech?',
                'answer':'Cornell Tech was actually the only grad school that I applied to. Though I looked at a ton. I was working as a Data Analyst at the time and was excited to see that all these schools had brand new Data Science programs! My excitement dwindled as I saw how these programs were devised. The curriculum was literally half courses from their Statistics department and half from their Computer Science department. Even though these are all emerging fields, I do not believe there has been much innovation in the way they are taught. I liked that Cornell Tech had developed a new and evolving curriculum. Which brings me to the next question.'
            },
            {
                'question':'How was your experience with both the Product and Startup Studio?',
                'answer':'The studio curriculum is unique, and the teachers stress the importance of working on cross-disciplinary teams with MBAs and other programs. It’s cool to have a lot of ownership of projects and to learn more about the whole process of ideating and building upon products. You can see some of the things I worked on my Projects page.',
                'answer2':'This is kind of the equivalent of research in this program (in terms of requirements). Though there are opportunities for research in the program, it is much less compared to other master programs. About 10% of the Startup Studio teams compete for seed money to spin out into startups after graduation. It is a good experience regardless of whether you come in interested in spinning out.',
                'answer3':"Something I was worried about was the Sprints. I had this idea that everyone was going to stay up all night working, and I am useless after 10 pm! It’s unnecessary to stay, and most of the time you already did most of the work. Okay, I did stay up all night one Sprint, but I wouldn't worry about it."
            },
            {
                'question':'How about with some of your other courses?',
                'answer':"I think the hands-on and group-based approach of the studio curriculum is also true of a lot of the courses. There are more group projects than tests, and there's a collaborative atmosphere. There either are not strict curves allocating what percentage of the class can get certain grades or it's just not talked about a lot. In my undergrad, we had rigid curves which fostered a competitive environment.",
                "answer2":"I really loved taking Natural Language Processing! People have directly told me that they are annoyed by me talking about how much I loved that class. Instead, I get to bother you about it! Virtual and Augmented Reality was fun (see my Projects page), and I also enjoyed Applied Machine Learning. Tech, Media, and Democracy is a cool class and joins together with other schools in the city like Columbia Journalism."
            },
            {
                'question': "How heavy is the courseload?",
                'answer': "I really believe grad school is what you make of it.  The only required classes for Computer Science are Algorithms and Studio so you can mostly choose your classes. There was a lot of work, but how much work and effort you put in is entirely up to you. I would consider myself to be on the 'works more than necessary' side of the spectrum. That night I stayed up during a Sprint? It was because I wanted to create a website from code which I had never done before. I was told by a Studio employee that it was unnecessary, and I could use a WordPress template. But that didn't sound like a learning experience!",
                'answer2': "Pro Tip: The Machine Learning courses are all second semester because Applied Machine Learning is a prereq. One, I would recommend taking AML your first semester. Two, the Machine Learning courses such as NLP, Computer Vision, Deep Learning, etc.  tend to be the most workload intensive. I would recommend choosing only one of them. You can take Natural Language Processing. Problem solved!"
            },
            {
                'question': "What were your favorite parts of the program?",
                'answer': "Obviously, the classes, but I already talked about that. Also, like I said there was a collaborative atmosphere. But it was more than that: the people were really friendly. I've never felt so comfortable meeting new people. And now I have friends from all over the world! The student body is a good size. It's small enough so that you can get to know most of them and large enough where events could be filled."
            },
            {
                'question': "What was it like living on Roosevelt Island?",
                'answer': "I'm happy that I lived on Roosevelt Island while I was a student, and I'm happy that I no longer live on Roosevelt Island. It’s fun to live with the other students as well as makes it easier to do all the group projects together and having a 2 min commute to class. Plus, the house is really nice, brand new, and has amazing views.",
                'answer2': "Pro tip: I lived on the 7th floor and had a really great view. Some of the views on the higher floors are just of the bridge. You can save money by choosing an apartment on a lower floor and still have a great view!",
                'answer3': "I love living in New York City! I went to college in NYC, left for a couple years, missed it terribly, and came back for grad school. It's also great because a good number stayed in New York after. But living on Roosevelt Island doesn't really feel like you are living in the city. It’s more quiet and harder to go out to do things. You have to take the F or the tram to get anywhere. I went into Manhattan every day, but I don't think anyone else left nearly that often."
            },
            {
                'question': "What if I didn't major in Computer Science in undergrad?",
                'answer': "I majored in Operations Research concentrating in Engineering Management Systems in college and took 3 Computer Science classes. I personally felt the disadvantage to be manageable, and I felt a little more advantaged in the Machine Learning courses.",
                'answer2': "I had never programmed in Python beforehand which is the programming language used in most of the classes. I spent the first few months of school googling 'I did this thing in R. What is the Python equivalent?' The first time I had to submit an assignment using Git, I freaked out because I thought I deleted all my work. Luckily, my brother fixed it for me in about 2 seconds. These are not things the professors will teach in you in class. I would recommend asking your fellow classmates questions and partnering with someone in the homeworks who has more experience. I often felt embarrassed when I didn't already know these things which made it difficult to ask questions, but it was always useful when I did. I would warn that if it's a lot easier for them that they might try to take over the assignment. I would recommend talking with your partners before you get to work about how you plan to divide the assignments, work in the same room, and update each other about your progress.",
                'answer3': "The only class I felt put in a disadvantage, and I heard other people who did not major in Computer Science say they felt similarly, is Algorithms and Data Structures. For this course I would recommend a ton of practice problems. The flip side of going to such a new school is disorganization and making it up as you go. When asked for practice problems, the teacher responded that the midterm was not even made yet let alone practice problems. Therefore, if you are not too familiar with algorithms, I would recommend spending some time beforehand learning and practicing.",
                'answer4': "I have directly heard someone from admissions say that they look for Linear Algebra knowledge. If you don't have that on your transcript, you should take an online course and mention it in your application. Linear Algebra is the foundation of a lot of computer science."
            },
            {
                'question': "Are there any scholarships?",
                'answer': "I was afforded 2 scholarships. One was a merit-based scholarship that Cornell Tech offered me along with my acceptance. This did not require a separate scholarship application. The other was through Women in Technology and Entrepreneurship in New York (WiTNY). They offer 3 scholarships each year to those that identify as women and are in the Computer Science, Operation Research, and Electrical Engineering programs specifically for Cornell Tech. They send you an application after you apply. I am not sure how applying at later rounds affects the likelihood of getting a scholarship."
            },
            {

                'question': "What is WiTNY?",
                'answer': "I would definitely recommend everyone get involved with Women in Technology and Entrepreneurship in New York (WiTNY) now known as Break Through Tech! There are events for women on campus and ways to volunteer to help CUNY students. I continue to volunteer by helping CUNY women with resume reviews. You do not have to be a woman to mentor women. Given that tech is mostly composed of men, it is imperative that men serve as mentors. When I went to CT, the Computer Science program was only 25% women. Though typical of tech, it sucks! Especially in a small school, I was often the only woman in a room. I encourage women to apply, and we can all work togehter to make the field more inclusive!"
            },
            {
                'question': "How much experience do students typically have coming into the program?",
                'answer': "I had two years of work experience prior to starting which I believe to be true for most Computer Science students. I am personally glad that I took a couple years after undergrad. It helped me realize what I was looking for out of the program and make the most of my time there. There were people from straight out of college through 5 years out. Wherever you're at, you'll be just fine and there will be others like you!"
            },
            {
                'question': "I'm going! How do I make the best of my experience?",
                'answer': "Best advice that I didn't take: connect with your professors. Go into office hours early on in the semester and introduce yourself. I participated a lot in class so eventually most of them knew me, but I wish that I made more of an effort. I know grad school is already time-consuming but talk to a professor of a subject you find interesting about research opportunities.",
                'answer2': "During orientation, I remember an alum giving advice about starting to work on Startup Studio as soon as possible. I don't think it's necessary to start working on a product early on, but I wish I got a head start on teaming. Teaming is where you come together with other people and decide that you want to team up for Startup Studio. It is a surprisingly long process. I mostly met other Computer Science people. I would recommend trying to meet MBAs early on. There is a stereotype that since MBAs are together in Ithaca for the summer that they are cliquey. That can be intimidating!",
                'answer3': "Overall, I would recommend trying to meet and get to know as many people as possible. As an introvert, I had to push myself to do this. This is a great thing about living in the House. If you want to hang out with people, you can go up to the roof, and if you want to be alone, you are an elevator ride away from your apartment! Also, it's another reason I am glad I chose Computer Science. Computer Science and MBA are the two largest programs at Cornell Tech, and some of the others have 10 to 15 people. So, I think socially it's a good call.",
                'answer4': "Congratulations! I am excited for you!"
            }
        ]
    },
    {
        'id': 'HW',
        'title': 'The Book Is On The Table',
        'description': 'First Post!',
        'date': 'May 29, 2020',
        /*Image sourced*/
        'image': 'https://now.tufts.edu/sites/default/files/180625_summer_books_lg.jpg',
        'sections': [
            {
                'question':'The book is on the table',
                'answer':"A close friend of mine is from Brazil. He told me that the first sentence that English classes in Brazil teach is 'The book is on the table.' Therefore, he calls this sentence the 'Hello, world.' of English. I want to take this opportunity to introduce my blog and personal website and have it say Hello, world! The book is on the table."
                
            },
            {
                'question':'Why am I writing this blog?',
                'answer':"I am opinionated and give insightful advice. With a background in mentorship, I believe I could inform based on what I've learned from my experiences. For the next couple of posts I plan to advise on applying to Cornell Tech and resume advice for entry level positions. I also want to write about things I care about like gender equality in tech. I hope you find this blog helpful and take away what's best for you!"
            },
            {
                'question':"Best advice I didn't take",
                'answer':"Sometimes taking helpful advice can be easier said then done. I'll get advice, agree that I should do it, but end up not following through. So, if I include this phrase in a post, it means someone gave me good advice, I didn't take, but maybe you could benefit from it. It also serves as a reminder to take the advice that you feels right for you and don't get caught up in what others tell you what you should be doing. I haven't taken all the advice I've ever gotten even when I agreed that it would be beneficial, so it's okay if you don't want to or don't get around to following my advice."
            },
            {
                'question':"Intro to my website and color scheme",
                'answer':"I've spent this week designing and building this website. Let's begin my advice with a struggle I had while designing. Best advice I somewhat didn't take: I once heard a Parsons professor say that you can't choose a color scheme based around your emotional attachments. How could she say that?! I have so much emotional attachment to pink and purple!",
                'answer2':"The first few iterations of my website contained pastel on top of pastel on top of pastel. Looked like something a kindergardener would hand in. Then, I tried going in the opposite direction and looked up which colors were the most well-liked based on marketing and psychology. Apparently, blue is trustworthy and a favorite amongst a high percentage of people. As a complementary color, orange pairs well as an accent to blue. Blue and orange? That doesn't include pink or purple at all!",
                'answer3':"After several iterations and commits entitled 'changed the color scheme again', I settled on the one that I did. I think it's important to know your audience, but I also think that a personal website should display your personality. A friend told me a basic practice in choosing a color scheme is to start with one color and then choose the rest of the color scheme based off that one color. So, my advice for a personal website is choose the first color that you have an emotional attachment to but don't choose all your colors based off an emotional attachment. As you can see, there is pink in this website. Purple didn't make the cut. The pink may only be an accent color, but it's there!"
            }
        ]

    }
];

export default posts;
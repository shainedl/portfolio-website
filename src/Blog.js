import React from "react"
import AppMarkdown from './post1.md'
import ReactMarkdown from 'react-markdown';
 
function Blog(props) {

  return (
    <div>
      <h1>BLOG</h1>

      <div className="post">
        <h2>Cornell Tech: Guide for Prospective Students</h2>
        <h2>May 26, 2020</h2>
        <p>I graduated from Cornell Tech a year ago with a Masters in Computer Science. During my time there, I was a Student Ambassador and led tours and panels for prospective students. Since then, a handful of prospectives reached out to me to ask questions. I would like to share with you their most common questions and my experience. </p>

        <h3>What made you choose Cornell Tech?</h3>
        <p>Cornell Tech was actually the only grad school that I applied to. Though I looked at a ton. I was working as a Data Analyst at the time and was excited to see that all these schools had brand new Data Science programs! My excitement dwindled as I saw how these programs were devised. The curriculum was literally half courses from their Statistics department and half from their Computer Science department. Even though these are all emerging fields, I do not believe there has been much innovation in the way they are taught. I liked that Cornell Tech had developed a new and evolving curriculum. Which brings me to the next question.</p>

        <h3>How was your experience with both the Product and Startup Studio?</h3>
        <p>The studio curriculum is pretty unique, and the teachers stress the importance of working on cross-disciplinary teams with MBAs and other programs. It’s cool to have a lot of ownership of projects and to learn more about the whole process of ideating and building upon products. You can see some of the things I worked on my Projects page. </p>
        <p>This is kind of the equivalent of research in this program (in terms of requirements). Though there are opportunities for research in the program, it is much less compared to other master programs. </p>
        <p>Something I was worried about was the Sprints. I had this idea that everyone was going to stay up all night working, and I am useless after 10 pm! It’s unnecessary to stay, and most of the time you already did most of the work. Okay, I did stay up all night one Sprint, but I wouldn't worry about it.</p>

        <h3>How about with some of your other courses?</h3>
        <p>I think the hands-on and group-based approach of the studio curriculum is also true of a lot of the courses. It’s more of a collaborative atmosphere, and there either are not strict curves allocating what percentage of the class can get certain grades or it's just not talked about a lot. In my undergrad, we had rigid curves which fostered a competitive environment.</p>
        <p>I really loved taking Natural Language Processing! People have directly told me that they are annoyed by me talking about how much I loved that class. Instead, I get to bother you about it! Virtual and Augmented Reality was fun (see my Projects page), and I also enjoyed Applied Machine Learning. Tech, Media, and Democracy is a cool class and joins together with other schools in the city like Columbia Journalism.  </p>

        <h3>How heavy is the courseload?</h3>
        <p>I really believe grad school is what you make of it.  The only required classes for Computer Science is Algorithms and Studio so you can mostly choose your classes. There was a lot of work, but how much work and effort you put in is entirely up to you. I would consider myself to be on the 'works more than necessary' side of the spectrum. That night I stayed up during a Sprint? It was because I wanted to create a website from code which I had never done before. I was told by a Studio employee that it was unnecessary, and I could use a WordPress template. But that didn't sound like a learning experience! </p>
        <p>Pro Tip: The Machine Learning courses are all second semester because Applied Machine Learning is a prereq. One, I would recommend taking AML your first semester. Two, the Machine Learning courses such as NLP, Computer Vision, Deep Learning, etc.  are some of the workload intensive. I would recommend choosing only one of them. You can take Natural Language Processing. Problem solved!</p>

        <h3>What were your favorite parts of the program?</h3>
        <p>Obviously, the classes, but I already talked about that. Also, like I said there was a collaborative atmosphere. But it was more than that: the people were really friendly. I've never felt so comfortable meeting new people. And now I have friends from all over the world! The student body is a good size. It's small enough so that you can get to know most of them and large enough where events could be filled. </p>

        <h3>What was it like living on Roosevelt Island?</h3>
        <p>I'm happy that I lived on Roosevelt Island while I was a student, and I am happy that I no longer live on Roosevelt Island. It’s fun to live with the other students as well as makes it easier to do all the group projects together and having a 2 min commute to class. Plus, the house is really nice, brand new, and has amazing views. </p>
        <p>Pro tip: I lived on the 7th floor and had a really great view. Some of the views on the higher floors are just of the bridge. You can save money by choosing an apartment on a lower floor and still have a great view!</p>
        <p>I love living in New York City! I went to college in NYC, left for a couple years, missed it terribly, and came back for grad school. It's also great because a good number stayed in New York after. But living on Roosevelt Island doesn't really feel like you are living in the city. It’s more quiet and harder to go out to do things. You have to take the F or the tram to get anywhere. I went into Manhattan every day, but I don't think anyone else left nearly that often. </p>
            
          
      </div>
    </div>
  )
}
 
export default Blog;

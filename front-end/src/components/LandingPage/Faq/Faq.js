//styling
import "./Faq.css";

//dependencies
import { useState } from "react";

const Faq = () => {
  const [expanded, setExpanded] = useState([]);

  const faqContent = [
    {
      id: 1,
      question: "What is Flixnet?",
      answer:
        "Flixnet is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      question: "How much does Flixnet cost?",
      answer:
        "Watch Flixnet on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Flixnet account to watch instantly on the web at flixnet.com from your personal computer or on any internet-connected device that offers the Flixnet app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Flixnet with you anywhere.",
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer:
        "Flixnet is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      question: "What can I watch on Flixnet?",
      answer:
        "Flixnet has an extensive library of feature films, documentaries, TV shows, anime, award-winning Flixnet originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      question: "Is Flitnex good for kids?",
      answer:
        "The Flixnet Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const collapsed = expanded.filter((currId) => currId !== id);
      setExpanded(collapsed);
    }
  };

  return (
    <div className="Faq">
      <div className="Faq_header">Frequently Asked Questions</div>
      <div className="Faq_accordian">
        <ul>
          {faqContent.map((item) => {
            return (
              <li key={item.id}>
                <h3>
                  <button onClick={() => handleToggleExpanded(item.id)}>
                    <span>{item.question}</span> {expanded.includes(item.id) ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-plus"></i>}
                  </button>
                </h3>
                <div >
                {expanded.includes(item.id) ? <div className="Faq_accordian_answer">{item.answer}</div> : ""}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Faq;

import React from "react";
import "./ContactSection.scss";
import VSheader from "../../VSheader/VSheader";
import Person from "../../Person/Person";

const ContactSection = () => {
  return (
    <section className="contact">
      <VSheader size={2} shadow={true}>
        About us
      </VSheader>
      <Person
        name={"Bartosz"}
        surname={"Kępka"}
        description={"Automation and robotics student in Warsaw."}
        imgUrl={
          "https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.0-9/s960x960/46456320_1110754145765807_1941359461566251008_o.jpg?_nc_cat=102&_nc_oc=AQmWbCutLsT0gdUCB1mu_J36l7d31vtlO0zQTrOjcfedBnLX5pMCimPJdpOUjFXSqaU&_nc_ht=scontent.fwaw7-1.fna&oh=ba3e34d1e6460c0a492c24e3497c07ed&oe=5E8AA790"
        }
        icons={[]}
      />
      <Person
        name={"Łukasz"}
        surname={"Blachnicki"}
        description={"Applied computer science student in Wroclaw."}
        imgUrl={
          "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        }
        icons={[]}
      />
    </section>
  );
};

export default ContactSection;

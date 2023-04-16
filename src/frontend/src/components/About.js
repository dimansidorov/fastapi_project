import React from "react";


const ContactItem = ({ item }) => {
    return (
        <a className="col nav-link icon m-1 text-muted" href={item.link}>
            {item.svg}
            <span className="">{item.title}</span>
        </a>
    )
}

const About = ({ contacts, photo, creator }) => {
    const altText = 'My Avatar';
    return (
        <main className="align-middle container d-flex w-100 h-100 flex-column">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 my-5 g-2">
                <div className="col">
                    <div className="container">
                        <img className="photo p-2" src={photo} alt={altText}
                          width="350" height="420" />
                        <div className="d-none d-md-block mt-5">
                            <h1 className="text-start mx-5">Contacts</h1>
                            <div className="text-start mx-5">
                                {contacts.map((item) => <ContactItem item={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
            <div className="cover-container">
              <h2 className="mx-5" >
                <strong>
                  {creator.title}
                </strong>
              </h2>
              <p className="text-muted m-5">
                {creator.text}
              </p>
            </div>
                </div>
                <div className="d-sm-block d-md-none">
                    <h1 className="text-start mx-5">Contacts</h1>
                    <div className="text-start m-5">
                        {contacts.map((item) => <ContactItem item={item}/>)}
                    </div>
                </div>
            </div>
        </main >
    )
}


export default About;
import React from "react";

const Faq = () => {
  return (
    <div className="container">
      <h1 className="text-center text-success">
        Frequently Asked Questions (FAQ)
      </h1>
      <div>
        <h4>How do I login to the computer?</h4>
        Computer use in the labs is restricted to currently affiliated UH
        students/faculty/staff, other UH affiliated persons, and VIA users. You
        must have an UH username and password with a current active affiliation
        with UH or have a sponsored Visitor Internet Access (VIA) username and
        password. Former faculty, staff, alumni, and retirees will not be able
        to login and use our computers. If you have problems with your login or
        do not have a UH username, please see a lab monitor for assistance. If
        you are having problems with your VIA login and password, please contact
        your sponsor.
      </div>
      <div className="mt-3">
        <h4>Where should I save my files?</h4>
        <p>
          It is recommended that you save all data to your own personal media
          (USB drive, CD-RW/DVD-RW, etc.) as this gives you the best protection
          and security against power outages and crashes. We do not recommend
          saving any data to the hard drive of the computer you are using as
          those files are removed upon logoff/restart.
        </p>
      </div>
      <div className="mt-3">
        <h4>Can I install software/hardware on computers in the labs?</h4>
        <p>
          You may use thumb drives, and other external storage devices. Feel
          free to ask an on-duty lab monitor for assistance with installation,
          if needed. Software installations require prior approval. You will
          need to email ITS Lab one (1) week in advance. We will then notify you
          with what will happen in regard to the software. Any software under
          consideration must have explicit licensing which allows installation
          in a university computer lab.
        </p>
      </div>
      <div className="mt-3"></div>
    </div>
  );
};

export default Faq;

import React, { useContext } from "react";
import { AuthContext } from "../../Context/ContextData";

const GetAQuote = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="w-full xl:h-[800px] lg:h-[720px] md:h-[800px] h-[800px]">
          <iframe
            src="https://form.jotform.com/240732755148459"
            title="Get A Quote"
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
};

export default GetAQuote;

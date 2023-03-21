import React from "react";
import Title from "../components/Title";

const Nomatch = () => {
  return (
    <div>
      <Title headline="ingen match - forkert url?" />
      <p>
        Der er desværre ingen match på den side, du forsøger at få adgang til
      </p>

      {/*Link til forsiden */}
    </div>
  );
};

export default Nomatch;

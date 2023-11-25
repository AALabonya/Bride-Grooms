/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-3/12  text-center my-8 "> 
          <h3 className="text-black mb-2 text-xl font-semibold">--- {subHeading} ---</h3>
          <h1 className="text-3xl border-y-4 uppercase py-4 font-semibold">{heading}</h1>
        </div>
    );
};

export default SectionTitle;
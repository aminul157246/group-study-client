
const Faq = () => {
    return (
        <div className="my-12">
            <h2 className="text-3xl font-semibold text-[#F2184F] text-center "> Frequently Asked Questions</h2>
            <h1 className="text-xl mb-4">Popular Question </h1>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Am I required to attend all meetings?
  </div>
  <div className="collapse-content"> 
    <p>Although participation in the SLC Study Group Program is voluntary, students must make a commitment to attend regularly and actively participate in the study group once they have registered.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Are any of my absences excused?
  </div>
  <div className="collapse-content"> 
    <p>All absences are counted the same, none are considered  . If you have concerns about being dropped, you can email slcstudygroups@umich.edu to explain your situation to see if we can assist you with staying in your current group, or helping you to find a group better suited to your schedule.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Can I switch groups?
  </div>
  <div className="collapse-content"> 
    <p>Yes, though because you are only allowed to enroll in one group per course you will need to drop your current group first.  If there are no other groups currently available, you will need to drop your current group and then sign up for the wait list.</p>
  </div>
</div>
        </div>
    );
};

export default Faq;
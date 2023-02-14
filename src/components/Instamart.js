import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='border border-black p-2 m-2 '>
      <h1 className='font-bold text-xl'>{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisible()}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible()}>Show</button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [show, setShow] = useState("");

  return (
    <>
      <Section
        title={'About Instamart'}
        description={
          'Fusce porta pretium nisl, sit amet tristique dui pharetra sed. Aliquam interdum dolor vel lectus ultricies, eget scelerisque dui mollis. Aenean accumsan porta velit, eget venenatis mi posuere quis. Vivamus in neque odio. Fusce aliquet nisl at ex congue tincidunt. Cras pulvinar, elit nec congue sollicitudin, dui magna luctus lorem, nec egestas sapien ipsum a orci. In volutpat felis sit amet urna lacinia consectetur. Suspendisse tristique augue nisi. In hac habitasse platea dictumst. Aenean dictum vitae elit sed consectetur. Proin sit amet vestibulum orci. Nam enim tellus, finibus pharetra facilisis nec, congue a risus. Integer ut ante nec massa ultricies varius in sit amet libero. Nam sagittis sagittis lacus vel scelerisque. Proin enim sapien, bibendum ac tincidunt ut, varius non tortor.'
        }
        isVisible = {show === "about"}
        setIsVisible={() => show !== "about" ? setShow("about") : setShow("")}
      />
      <Section
        title={'Team Instamart'}
        description={
          'Fusce porta pretium nisl, sit amet tristique dui pharetra sed. Aliquam interdum dolor vel lectus ultricies, eget scelerisque dui mollis. Aenean accumsan porta velit, eget venenatis mi posuere quis. Vivamus in neque odio. Fusce aliquet nisl at ex congue tincidunt. Cras pulvinar, elit nec congue sollicitudin, dui magna luctus lorem, nec egestas sapien ipsum a orci. In volutpat felis sit amet urna lacinia consectetur. Suspendisse tristique augue nisi. In hac habitasse platea dictumst. Aenean dictum vitae elit sed consectetur. Proin sit amet vestibulum orci. Nam enim tellus, finibus pharetra facilisis nec, congue a risus. Integer ut ante nec massa ultricies varius in sit amet libero. Nam sagittis sagittis lacus vel scelerisque. Proin enim sapien, bibendum ac tincidunt ut, varius non tortor.'
        }
        isVisible = {show === "team"}
        setIsVisible={() => show !== "team" ? setShow("team") : setShow("")}
      />
      <Section
        title={'Careers'}
        description={
          'Fusce porta pretium nisl, sit amet tristique dui pharetra sed. Aliquam interdum dolor vel lectus ultricies, eget scelerisque dui mollis. Aenean accumsan porta velit, eget venenatis mi posuere quis. Vivamus in neque odio. Fusce aliquet nisl at ex congue tincidunt. Cras pulvinar, elit nec congue sollicitudin, dui magna luctus lorem, nec egestas sapien ipsum a orci. In volutpat felis sit amet urna lacinia consectetur. Suspendisse tristique augue nisi. In hac habitasse platea dictumst. Aenean dictum vitae elit sed consectetur. Proin sit amet vestibulum orci. Nam enim tellus, finibus pharetra facilisis nec, congue a risus. Integer ut ante nec massa ultricies varius in sit amet libero. Nam sagittis sagittis lacus vel scelerisque. Proin enim sapien, bibendum ac tincidunt ut, varius non tortor.'
        }
        isVisible = {show === "careers"}
        setIsVisible={() => show !== "careers" ? setShow("careers") : setShow("")}
      />
    </>
  );
};

export default Instamart;

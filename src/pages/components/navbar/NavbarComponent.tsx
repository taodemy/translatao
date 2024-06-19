import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const NavbarComponent = () => {
  return (
    <div className="w-11/12 mx-7">
        <div className="max-w-full mt-6 h-12 flex justify-between items-center">
            <LeftSection />
            <RightSection />
        </div>
    </div>
  );
};

export default NavbarComponent;

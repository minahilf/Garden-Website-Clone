import Categories from "./Categories/page";
import Main from "./Main/page";
import Offer from "./Offer/page";
import Services from "./Services/page";
import Upcoming from "./Upcoming/page";
export default function Home() {
  return (
    <div>
      <Main/>
      <Services/>
      <Categories/>
      <Offer/>
      <Upcoming/>
    </div>
  );
}

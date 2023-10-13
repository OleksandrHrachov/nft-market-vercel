import './Header.scss';
import { Logo } from "../Logo";
import { Navigation } from './Navigation';


export default function Header() {
  return (
    <header className=" container header">
      <div className="header__logo"><Logo /></div>
      <div className="header__nav"><Navigation /></div>
    </header>
  );
}

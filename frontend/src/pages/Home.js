import chatIcon from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecur from '../assets/img/icon-security.png';
import '../app/App.css';
import Navbar from '../components/navbar/navbar';
import { featureList } from './featureList';

function Home() {
    return (
        <main>
            <div className='hero'>
                <section className='hero-content'>
                    <h2 className='sr-only'>Promoted Content</h2>
                    <p className='subtitle'>No fees.</p>
                    <p className='subtitle'>No minimum deposit.</p>
                    <p className='subtitle'>High interest rates.</p>
                    <p className='text'>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                {featureList.map((feature) => (
                    <div key={feature.title} className='feature-item'>
                        <img src={feature.icon}
                            alt='Chat Icon' className='feature-icon' />
                        <h3 className='feature-item-title'>{feature.title}</h3>
                        <p> {feature.content}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Home;

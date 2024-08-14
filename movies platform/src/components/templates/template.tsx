import Header from "./header"
type Props= {
    children: React.ReactNode;
};


const routes =[
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/newMovie',
        text: 'NewMovie',
    },
    {
        href: '/Genere',
        text: 'Genere',
    },
    {
        href: '/TVSeries',
        text: 'TVSeries',
    },
   
];

function Template({ children }: Props) {
    return (
        <div style={{ paddingTop: '60px' }}> {/* Ajusta según la altura del header */}
            <Header title="" links={routes} />
            {children}
        </div>
    );
}


export default Template;
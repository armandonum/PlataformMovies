import Header from "./header"
type Props= {
    children: React.ReactNode;
};


const routes =[
    {
        href: '/Home',
        text: 'Home',
    },
    {
        href: '/newMovie',
        text: 'NewMovie',
    },
    {
        href: '/Genre',
        text: 'Genre',
    },
    {
        href: '/TVSeries',
        text: 'TVSeries',
    },
   
];

function Template({ children }: Props) {
    return (
        <div style={{ paddingTop: '15px' }}> {/* Ajusta según la altura del header */}
            <Header title="" links={routes} />
            {children}
        <div>
dghjkl
        </div>
        </div>
      

    );
}


export default Template;
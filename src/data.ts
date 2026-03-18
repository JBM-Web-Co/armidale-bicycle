export type BusinessInfo = Readonly<{
    name: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
    locationNote: string;
    abn: string;
}>;

export type TradingHour = Readonly<{
    day: string;
    hours: string;
}>;

export type Brand = Readonly<{
    name: string;
    image: string;
    href: string;
}>;

export type Service = Readonly<{
    title: string;
    description: string;
    highlight?: boolean;
}>;

export type Stat = Readonly<{
    value: string;
    label: string;
}>;

export const BUSINESS: BusinessInfo = {
    name: 'Armidale Bicycle Centre',
    phone: 'tel:0267723718',
    phoneDisplay: '02 6772 3718',
    email: 'armidalebicyclecentre@gmail.com',
    address: '2/244 Beardy St, Armidale NSW 2350',
    locationNote: 'Opposite Centro Armidale Plaza (Kmart and Woolworths)',
    abn: '65 001 353 902',
} as const;

export const TRADING_HOURS: ReadonlyArray<TradingHour> = [
    { day: 'Mon–Fri', hours: '9:00am – 5:30pm' },
    { day: 'Saturday', hours: '9:00am – 1:00pm' },
    { day: 'Sunday', hours: 'Closed' },
] as const;

export const BRANDS: ReadonlyArray<Brand> = [
    {
        name: 'Giant',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/giant_default_share_image_2022.jpg',
        href: 'https://www.giant-bicycles.com/au',
    },
    {
        name: 'Focus',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Focus_bikes_logo.jpg',
        href: 'https://www.focus-bikes.com/au_en/',
    },
    {
        name: 'Avanti',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/1-avanti-logojpg-1.png',
        href: 'https://www.avantibikes.com/au/',
    },
    {
        name: 'Cervelo',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Cervelo.webp',
        href: 'https://www.cervelo.com/en-AU',
    },
    {
        name: 'Santa Cruz',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Santa+Cruz.png',
        href: 'https://www.santacruzbicycles.com/en-au',
    },
    {
        name: 'Kalkhoff',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Kalkhoff.png',
        href: 'https://www.kalkhoff-bikes.com/en_au/homepage',
    },
    {
        name: 'Scott',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Scott+Logo.jpg',
        href: 'https://www.scott-sports.com/au/en/',
    },
    {
        name: 'Pinarello',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Pinarello.png',
        href: 'https://pinarello.com/usa/en',
    },
    {
        name: 'Colnago',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Colnago-2.jpg',
        href: 'https://www.colnago.com/en-au',
    },
    {
        name: 'Look',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Look-2.jpg',
        href: 'https://www.lookcycle.com/us-en/',
    },
    {
        name: 'Felt',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Screen-Shot-2015-07-15-at-9.webp',
        href: 'https://www.feltbicycles.com/en-au.html',
    },
    {
        name: 'Apollo',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Apollo+Logo.jpg',
        href: 'https://www.apollobikes.com/',
    },
    {
        name: 'Malvern Star',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/logo_urban_dark-300x157.png',
        href: 'https://www.malvernstar.com.au/',
    },
    {
        name: 'Tebco',
        image: 'https://irp.cdn-website.com/160711cc/dms3rep/multi/Tebco-Logo-1.webp',
        href: 'https://electricbicycle.com.au/',
    },
] as const;

export const ACCESSORIES_BRANDS: ReadonlyArray<string> = [
    'DT Swiss',
    'Enve',
    'Muc-Off',
    'Topeak',
    'ULAC',
    'Pirelli',
    'Vittoria',
    'Giro',
    'Smith Optics',
    'Laser',
    'Cuore',
    'BBB',
    'Yakima',
    'Thule',
    'Buzzrack',
] as const;

export const SERVICES: ReadonlyArray<Service> = [
    {
        title: 'Bicycle Sales & Advice',
        description:
            "Expert guidance across our full range of bikes from the world's leading brands. We'll match you to the right ride.",
    },
    {
        title: 'Repairs & Servicing',
        description:
            "Full workshop on-site with same-day repairs available. From a flat tyre to a full overhaul, we've got you covered.",
        highlight: true,
    },
    {
        title: 'Bike Fitting',
        description:
            'Professional bike fitting in Armidale and across New England to ensure your most comfortable and efficient ride.',
    },
    {
        title: 'Coaching',
        description:
            'Tailored bike coaching for starters and amateurs looking to build confidence and improve performance on the road or trail.',
    },
] as const;

export const STATS: ReadonlyArray<Stat> = [
    { value: '1974', label: 'Est.' },
    { value: '165+', label: 'Years Combined Experience' },
    { value: '6', label: 'Olympic Games Attended' },
    { value: 'Same Day', label: 'Repairs Available' },
] as const;

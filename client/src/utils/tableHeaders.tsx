const tableHeaders = {
    processors: [
        { label: 'Name', property: 'full_name' },
        { label: 'Socket', property: 'socket' },
        { label: 'Cores', property: 'cores' },
        { label: 'Integrated Graphics', property: 'integrated_gpu' },
        { label: 'TDP', property: 'tdp_w' },
        { label: 'Price', property: 'min_price' },
    ],
    video_cards: [
        { label: 'Name', property: 'full_name' },
        { label: 'Boost Clock', property: 'boost_clock_mhz' },
        { label: 'Chipset', property: 'gpu_spec_ref' },
        { label: 'Brand', property: 'brand' },
        { label: 'Price', property: 'min_price' },
    ],
    motherboards: [
        { label: 'Name', property: 'full_name' },
        { label: 'Socket', property: 'socket' },
        { label: 'Form Factor', property: 'formfactor' },
        { label: 'Memory Capacity', property: 'memory_capacity_gb' },
        { label: 'Ram Slots', property: 'ram_slots' },
        { label: 'Price', property: 'min_price' },
    ]
};
type Category = 'processors' | 'video_cards' | 'motherboards'

const isCategory = (category: string): category is Category => category in tableHeaders;

const getTableHeaders = (category: Category) => tableHeaders[category]

export {getTableHeaders, isCategory}
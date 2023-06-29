const category = 'Motherboards';

const headers = [
    { label: 'Name' },
    { label: 'Socket' },
    { label: 'Cores (Threads)' },
    { label: 'Integrated Graphics'},
    { label: 'TDP' },
    { label: 'Price' },
];

const shouldAddLineBreak = (label: string) => {
    return label.length > 14 && label.split(' ').length == 2;
};

const TableHeader = () => {
    return (
        <thead className="px-5 py-3 font-bold text-slate-700 text-xs">
            <tr>
                <th className="">
                    <div className="rounded-t-xl flex items-center px-5 py-3">
                        <div className="text-base sm:text-lg font-bold text-slate-200">{category}</div>
                    </div>
                </th>
            </tr>
            <tr id="specs-header" className="bg-slate-900 text-white">
                {headers.map((header, index) => (
                    <th key={index}>
                        {shouldAddLineBreak(header.label) ? (
                            <>
                                {header.label.split(' ')[0]}
                                <br />
                                {header.label.split(' ')[1]}
                            </>
                        ) : (
                            header.label
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
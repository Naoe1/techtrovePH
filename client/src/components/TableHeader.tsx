interface TableColumn {
    label: string;
    property: string;
}

const shouldAddLineBreak = (label: string) => label.length > 14 && label.split(' ').length == 2;

const formatCategory = (category: string) =>(category.charAt(0).toUpperCase() + category.slice(1)).replace('_', ' ');

const TableHeader = ({ columns, category }: { columns: TableColumn[], category: string; }) => {
    return (
        <thead className="px-5 py-3 font-bold text-slate-700 text-xs">
            <tr>
                <th className="">
                    <div className="rounded-t-xl flex items-center px-5 py-3">
                        <div className="text-base sm:text-lg font-bold text-slate-200">{formatCategory(category)}</div>
                    </div>
                </th>
            </tr>
            <tr id="specs-header" className="bg-slate-900 text-slate-200">
                {columns.map((header, index) => (
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
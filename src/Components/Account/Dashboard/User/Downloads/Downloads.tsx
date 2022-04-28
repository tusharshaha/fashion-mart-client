import React from 'react';
interface files {
    product: string,
    date: string,
    link: string
}
const Downloads: React.FC = () => {
    const files: files[] = [
        { product: "Fashion Mart - E-Commerce", date: "April 30, 2022", link: "" },
        { product: "Kino - E-Commerce", date: "March 17, 2022", link: "" },
        { product: "Kids Toy - E-Commerce", date: "August 23, 2021", link: "" },
    ]
    return (
        <div>
            <h4 className="mb-3">Downloads</h4>
            <div className='cus_td_container'>
                <table className='cus_table text-center'>
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Creation</td>
                            <td>Expire</td>
                            <td>Download</td>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((ele, i) => <tr key={i}>
                            <td>{ele.product}</td>
                            <td>{ele.date}</td>
                            <td>Never</td>
                            <td><button className='btn text-danger'>Click Here to Download</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Downloads;
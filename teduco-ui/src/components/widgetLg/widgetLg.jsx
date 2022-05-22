import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Applications</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Country</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sinan Engin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Kasımpaşa</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sinan Engin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Kasımpaşa</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sinan Engin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Kasımpaşa</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sinan Engin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Kasımpaşa</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
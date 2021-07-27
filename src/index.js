import React from "react";
import ReactDOM from "react-dom";
import useSWR from "swr";
import { Nav } from "@intility/bifrost-react";
import { Table } from "@intility/bifrost-react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "@intility/bifrost-react/dist/bifrost-app.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

class ExceptionTable extends React.Component {
  renderRow(props) {
    return (
      <Table.Row>
        <Table.Cell>{props.server}</Table.Cell>
        <Table.Cell>{props.exclusions[0].path}</Table.Cell>
        <Table.Cell>{props.exclusions[0].extension}</Table.Cell>
        <Table.Cell>{props.exclusions[0].processPath}</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Server</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
            <Table.HeaderCell>Extension</Table.HeaderCell>
            <Table.HeaderCell>Process Path</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.props.rows.map(this.renderRow)}</Table.Body>
      </Table>
    );
  }
}

function DefenderOverview() {
  const { data, error } = useSWR(
    `http://localhost:5000/api/v1/DefenderException`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <ExceptionTable rows={data} />;
}

const App = () => (
  <Nav
    appName="Defender Portal"
    top={
      <>
        <a href="/path" title="Profile">
          <Nav.Item icon={faUser} />
        </a>
        <a href="/path">
          <Nav.Item>About</Nav.Item>
        </a>
      </>
    }
  >
    <DefenderOverview />
  </Nav>
);

ReactDOM.render(<App />, document.getElementById("root"));

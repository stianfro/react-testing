import React from "react";
import ReactDOM from "react-dom";
import useSWR from "swr";
import { Nav } from "@intility/bifrost-react";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import { Table } from "@intility/bifrost-react";

import "@intility/bifrost-react/dist/bifrost-app.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Example() {
  const { data, error } = useSWR(
    `http://localhost:5000/api/v1/DefenderException`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    // <pre>{JSON.stringify(data.exclusions[0].path, null, 2)}</pre>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Server</Table.HeaderCell>
          <Table.HeaderCell>Path</Table.HeaderCell>
          <Table.HeaderCell>Extension</Table.HeaderCell>
          <Table.HeaderCell>Process Path</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{data[1].server}</Table.Cell>
          <Table.Cell>{data[1].exclusions[0].path}</Table.Cell>
          <Table.Cell>{data[1].exclusions[0].extension}</Table.Cell>
          <Table.Cell>{data[1].exclusions[0].processPath}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
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
    side={
      <>
        <a href="/path">
          <Nav.Item icon={faHome}>Home</Nav.Item>
        </a>
        <a href="/path">
          <Nav.Item icon={faCog}>Settings</Nav.Item>
        </a>
      </>
    }
  >
    <Example />
  </Nav>
);

ReactDOM.render(<App />, document.getElementById("root"));

import { Card, Grid, Col, Text } from '@mantine/core';
import { useSettings } from '../../Context/Setting/settingContext';
import "./List.scss";

function List() {
  const { settings } = useSettings();

  return (
    <Card shadow="xs" padding="md">
      <h2>Current Settings</h2>
      <Grid gutter="sm">
        <Col span={12}>
          <Text size="lg">Display Count: {settings.maxItemsPerPage}</Text>
        </Col>
        <Col span={12}>
          <Text size="lg">
            Hide Completed: <span>{settings.hideCompleted ? 'Yes' : 'No'}</span>
          </Text>
        </Col>
       
      </Grid>
    </Card>
  );
}

export default List;
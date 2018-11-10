import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Container from '../index';
import { View, Text } from 'react-native';
it('renders correctly with defaults', () => {
  const app = renderer
    .create(<Container >
      <View>
        <Text>Test</Text>
      </View>
    </Container>)
    .toJSON();
  expect(app).toMatchSnapshot();
});
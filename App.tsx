import React from 'react';

import {View, Text, PlatformColor} from 'react-native';

import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: PlatformColor('label')}}>Hello</Text>
      </View>
    </QueryClientProvider>
  );
};

export default App;

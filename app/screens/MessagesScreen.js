import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const inittialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium finibus magna pulvinar dapibus. Morbi et dictum sapien. Duis nibh purus, varius ac diam et, lobortis efficitur nulla. Vestibulum faucibus lacus at libero sagittis vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet commodo sapien. Nullam enim mi, pellentesque in metus fringilla, ornare laoreet magna. Integer aliquet mauris non diam volutpat efficitur. Donec vel mollis tellus. Maecenas ut hendrerit velit, et tempor nisi. Integer a velit quis neque viverra dignissim sit amet eu dolor. Cras imperdiet metus bibendum mi sollicitudin, in dictum tellus varius. In interdum sit amet metus in lobortis.",
    description:
      "Nullam porta blandit odio, et gravida felis malesuada sed. Curabitur vehicula auctor turpis, id finibus purus porttitor a. Curabitur non purus non felis mollis tincidunt non at metus. Maecenas dolor lorem, vulputate rhoncus eros sollicitudin, mattis lacinia velit. Cras maximus blandit eros quis accumsan. Donec vitae diam dolor. Curabitur vehicula in odio in sodales. Integer molestie pellentesque vulputate. In accumsan nibh et enim hendrerit, in ultrices nunc feugiat. Vestibulum a ultrices tellus. Morbi vulputate sapien at mauris ultricies tempor. Morbi sit amet gravida eros. Vestibulum nec quam enim.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "Proin non nibh vitae nunc tincidunt pulvinar sit amet vel nunc. Praesent viverra odio eu elit aliquam tempor. Mauris vitae risus a odio fermentum malesuada nec nec orci. Nullam tempus at metus a maximus. Cras ut nunc malesuada, dapibus nisi vel, cursus mi. Mauris magna enim, sodales nec lorem id, lacinia accumsan ex. In ipsum quam, placerat tempor accumsan eget, vulputate ut neque. Vestibulum faucibus erat sed ante mattis, nec posuere purus scelerisque. Integer est mauris, pretium nec neque at, sollicitudin finibus dui.",
    description:
      "Nulla vulputate varius ante, lacinia placerat augue ullamcorper finibus. Cras enim ligula, porta eu enim nec, vehicula commodo purus. Praesent finibus neque in lectus fringilla, non porta tortor semper. Mauris scelerisque, risus non volutpat pulvinar, diam massa sagittis mi, viverra ultrices nunc est sit amet purus. Mauris augue turpis, commodo mollis orci sit amet, ultrices varius lectus. Nullam lacinia accumsan iaculis. Nunc diam lectus, posuere lobortis cursus ac, elementum vehicula sapien. Aenean rhoncus ante odio, vel vestibulum dui ornare ac.",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(inittialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the massage from messages
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

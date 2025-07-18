import { FlatList, Text } from "react-native";
import { meditations } from "@/data";
import { MediationListItem } from "@/components/MeditationListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="gap-8 p-3"
      renderItem={({ item }) => <MediationListItem meditation={item} />}
    />
  );
}

import { useBackend } from '../backend';
import { LabeledList, Section } from 'tgui-core/components';
import { Window } from '../layouts';

type Data = {
  character_name: string;
  pronouns: string;
  age: string;
  voice_type: string;
  accent: string;
  voice_color: string;
  dominant_hand: string;
};

export const CharacterSheet = () => {
  const { data } = useBackend<Data>();
  const {
    character_name = 'Unnamed',
    pronouns = '',
    age = '',
    voice_type = '',
    accent = '',
    voice_color = '#ffffff',
    dominant_hand = '',
  } = data;

  return (
    <Window width={480} height={420} title="Who Are You?">
      <Window.Content>
        <Section title="Identity">
          <LabeledList>
            <LabeledList.Item label="Character Name">{character_name}</LabeledList.Item>
            <LabeledList.Item label="Pronouns">{pronouns}</LabeledList.Item>
            <LabeledList.Item label="Age">{age}</LabeledList.Item>
            <LabeledList.Item label="Voice Type">{voice_type}</LabeledList.Item>
            <LabeledList.Item label="Accent">{accent}</LabeledList.Item>
            <LabeledList.Item label="Voice Color">
              <span style={{ color: voice_color }}>{voice_color}</span>
            </LabeledList.Item>
            <LabeledList.Item label="Dominant Hand">{dominant_hand}</LabeledList.Item>
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
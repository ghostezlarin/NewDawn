import { useState } from 'react';
import { useBackend } from '../backend';
import { LabeledList, Section, Tabs } from 'tgui-core/components';
import { Window } from '../layouts';

type Data = {
  character_name: string;
  pronouns: string;
  age: string;
  voice_type: string;
  accent: string;
  voice_color: string;
  dominant_hand: string;
  pq: number;
  faith: string;
  patron: string;
};

export const CharacterSheet = () => {
  const { data } = useBackend<Data>();
  const [currentTab, setCurrentTab] = useState('identity');
  const {
    character_name = 'Unnamed',
    pronouns = '',
    age = '',
    voice_type = '',
    accent = '',
    voice_color = '#ffffff',
    dominant_hand = '',
    pq = 0,
    faith = '',
    patron = '',
  } = data;

  return (
    <Window width={480} height={460} title="Who Are You?">
      <Window.Content>
        <Tabs>
          <Tabs.Tab
            selected={currentTab === 'identity'}
            onClick={() => setCurrentTab('identity')}
          >
            Identity
          </Tabs.Tab>
          <Tabs.Tab
            selected={currentTab === 'class'}
            onClick={() => setCurrentTab('class')}
          >
            Class
          </Tabs.Tab>
        </Tabs>

        {currentTab === 'identity' && (
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
        )}

        {currentTab === 'class' && (
          <Section title="Class">
            <LabeledList>
              <LabeledList.Item label="Player Quality">{pq}</LabeledList.Item>
              <LabeledList.Item label="Faith">{faith}</LabeledList.Item>
              <LabeledList.Item label="Patron">{patron}</LabeledList.Item>
            </LabeledList>
          </Section>
        )}
      </Window.Content>
    </Window>
  );
};
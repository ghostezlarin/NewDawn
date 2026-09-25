import { useBackend } from '../backend';
import { Section } from '../components';
import { Window } from '../layouts';

type Data = {
  character_name: string;
};

export const CharacterSheet = () => {
  const { data } = useBackend<Data>();
  const { character_name = '' } = data;

  return (
    <Window width={480} height={360} title="Who Are You?">
      <Window.Content>
        <Section title="Identity">
          <div>Character Name: {character_name}</div>
        </Section>
      </Window.Content>
    </Window>
  );
};
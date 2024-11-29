import { entityTable } from "~/server/database/schema";
import { eq } from "drizzle-orm";

export interface IEntity {
  id: string;
  campaign: string;
  isPlayerCharacter: boolean;
  isNonPlayerCharacter: boolean;
  isMonster: boolean;
  isCustom: boolean;
  name: string;
  description: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armorClass: number;
  hitPoints: number;
  temporaryHitPoints: number | null;
  speed: number;
  walkingSpeed: number | null;
  flyingSpeed: number | null;
  swimmingSpeed: number | null;
  climbingSpeed: number | null;
  burrowingSpeed: number | null;
  initiative: string;
  attackBonus: string;
  damageRolls: string;
  savingThrows: string;
  hitDice: string;
  damageResistances: string | null;
  damageImmunities: string | null;
  damageVulnerabilities: string | null;
  conditionImmunities: string | null;
  passivePerception: number;
  visionTypes: string;
  acrobatics: number | null;
  animalHandling: number | null;
  arcana: number | null;
  athletics: number | null;
  deception: number | null;
  history: number | null;
  insight: number | null;
  intimidation: number | null;
  investigation: number | null;
  medicine: number | null;
  nature: number | null;
  perception: number | null;
  performance: number | null;
  persuasion: number | null;
  religion: number | null;
  sleightOfHand: number | null;
  stealth: number | null;
  survival: number | null;
  traitsAndFeatures: string;
  innateTraits: string | null;
  classFeatures: string | null;
  legendaryActions: string | null;
  lairActions: string | null;
  regionalEffects: string | null;
  racialTraits: string | null;
  backgroundFeatures: string | null;
  spells: string | null;
  spellSaveDC: number | null;
  spellAttackBonus: number | null;
  spellSlots: number | null;
  preparedKnownSpells: string | null;
  spellLevel: string | null;
  magicalResistances: string | null;
  innateSpellcasting: string | null;
  actions: string;
  multiattack: string | null;
  bonusActions: string | null;
  reactions: string | null;
  specialActions: string | null;
  sizeAndSpace: string;
  sizeCategory: string | null;
  reach: string | null;
  spaceOccupied: string | null;
  personality: string;
  alignment: string | null;
  ideals: string | null;
  bonds: string | null;
  flaws: string | null;
  personalityTraits: string | null;
  languages: string;
  miscellaneousStats: string;
  challengeRating: string | null;
  experiencePoints: string | null;
  toolProficiencies: string | null;
  equipment: string | null;
  factionsOrAffiliations: string | null;
}

export class Entity implements IEntity {
  id = "";
  campaign = "";
  isPlayerCharacter = false;
  isNonPlayerCharacter = false;
  isMonster = false;
  isCustom = false;
  name = "";
  description = "";
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;
  armorClass = 0;
  hitPoints = 0;
  temporaryHitPoints: number | null = null;
  speed = 0;
  walkingSpeed: number | null = null;
  flyingSpeed: number | null = null;
  swimmingSpeed: number | null = null;
  climbingSpeed: number | null = null;
  burrowingSpeed: number | null = null;
  initiative = "";
  attackBonus = "";
  damageRolls = "";
  savingThrows = "";
  hitDice = "";
  damageResistances: string | null = null;
  damageImmunities: string | null = null;
  damageVulnerabilities: string | null = null;
  conditionImmunities: string | null = null;
  passivePerception = 0;
  visionTypes = "";
  acrobatics: number | null = null;
  animalHandling: number | null = null;
  arcana: number | null = null;
  athletics: number | null = null;
  deception: number | null = null;
  history: number | null = null;
  insight: number | null = null;
  intimidation: number | null = null;
  investigation: number | null = null;
  medicine: number | null = null;
  nature: number | null = null;
  perception: number | null = null;
  performance: number | null = null;
  persuasion: number | null = null;
  religion: number | null = null;
  sleightOfHand: number | null = null;
  stealth: number | null = null;
  survival: number | null = null;
  traitsAndFeatures = "";
  innateTraits: string | null = null;
  classFeatures: string | null = null;
  legendaryActions: string | null = null;
  lairActions: string | null = null;
  regionalEffects: string | null = null;
  racialTraits: string | null = null;
  backgroundFeatures: string | null = null;
  spells: string | null = null;
  spellSaveDC: number | null = null;
  spellAttackBonus: number | null = null;
  spellSlots: number | null = null;
  preparedKnownSpells: string | null = null;
  spellLevel: string | null = null;
  magicalResistances: string | null = null;
  innateSpellcasting: string | null = null;
  actions = "";
  multiattack: string | null = null;
  bonusActions: string | null = null;
  reactions: string | null = null;
  specialActions: string | null = null;
  sizeAndSpace = "";
  sizeCategory: string | null = null;
  reach: string | null = null;
  spaceOccupied: string | null = null;
  personality = "";
  alignment: string | null = null;
  ideals: string | null = null;
  bonds: string | null = null;
  flaws: string | null = null;
  personalityTraits: string | null = null;
  languages = "";
  miscellaneousStats = "";
  challengeRating: string | null = null;
  experiencePoints: string | null = null;
  toolProficiencies: string | null = null;
  equipment: string | null = null;
  factionsOrAffiliations: string | null = null;

  constructor(init?: Partial<Entity>) {
    Object.assign(this, init);
  }
}

export const useEntities = () => {
  const _entities = useState<Entity[]>(() => []);
  const entities = computed(() => _entities.value);

  const db = useNeonDatabase();

  const addEntity = async (entity: Entity) => {
    const insertedEntity = await db
      .insert(entityTable)
      .values(entity)
      .returning()
      .then(() => {
        _entities.value.push(entity);
      })
      .catch((err) => {
        console.error(`[ useEntities ] Error adding entity: ${err}`);
      });
    return insertedEntity;
  };

  const removeEntity = (entity: Entity) => {
    db.delete(entityTable)
      .where(eq(entityTable.id, entity.id))
      .then(() => {
        _entities.value = _entities.value.filter((e) => e !== entity);

        console.log(
          `[ useEntities ] Entity with id ${entity.id} removed successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useEntities ] Error removing entity: ${err}`);
      });
  };

  const updateEntity = (entity: Entity, updatedEntity: Entity) => {
    db.update(entityTable)
      .set(updatedEntity)
      .where(eq(entityTable.id, entity.id))
      .then(() => {
        const index = _entities.value.findIndex((e) => e === entity);
        _entities.value[index] = updatedEntity;
        console.log(
          `[ useEntities ] Entity with id ${entity.id} updated successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useEntities ] Error updating entity: ${err}`);
      });
  };

  const findEntity = (id: string) => {
    return _entities.value.find((e) => e.id === id);
  };

  const getEntities = async () => {
    const allEntities = await db
      .select()
      .from(entityTable)
      .then((rows) => (_entities.value = rows.map((row) => new Entity(row))));
    return allEntities;
  };

  return {
    _entities,
    entities,
    addEntity,
    getEntities,
    removeEntity,
    updateEntity,
    findEntity,
  };
};

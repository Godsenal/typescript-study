export enum Skill { Angular, React, Vue, Ember };
export interface Developer {
  id: number;
  name: string;
  age?: number;
  skill: Skill;
};

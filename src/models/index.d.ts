import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Gender {
  BOY = "BOY",
  GIRL = "GIRL"
}



type EagerUpdate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Update, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly summary?: string | null;
  readonly memberID: string;
  readonly pictureUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUpdate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Update, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly summary?: string | null;
  readonly memberID: string;
  readonly pictureUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Update = LazyLoading extends LazyLoadingDisabled ? EagerUpdate : LazyUpdate

export declare const Update: (new (init: ModelInit<Update>) => Update) & {
  copyOf(source: Update, mutator: (draft: MutableModel<Update>) => MutableModel<Update> | void): Update;
}

type EagerMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly date?: string | null;
  readonly bio?: string | null;
  readonly summary?: string | null;
  readonly pictureUrl?: string | null;
  readonly Updates?: (Update | null)[] | null;
  readonly sponsor?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly date?: string | null;
  readonly bio?: string | null;
  readonly summary?: string | null;
  readonly pictureUrl?: string | null;
  readonly Updates: AsyncCollection<Update>;
  readonly sponsor?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member>) => Member) & {
  copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}
import { DocumentData } from "firebase/firestore";

export const assignTypes = <T extends object>() => {
  return {
    toFirestore(doc: T): DocumentData {
      return doc;
    },
    fromFirestore(snapshot: DocumentData): T {
      return snapshot.data();
    },
  };
};

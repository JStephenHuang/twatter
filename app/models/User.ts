import { firestore } from "firebase-admin";

export class User {
  private id: string;
  readonly name: string;
  readonly handle: string;

  constructor(id: string, name: string, handle: string) {
    this.id = id;
    this.name = name;
    this.handle = handle;
  }

  static async get(id: string) {
    const db = firestore();
    const userCollection = db.collection("users");
    const userDoc = await userCollection.doc(id).get();

    if (!userDoc.exists) {
      return null;
    }

    const userData = userDoc.data();

    if (userData === undefined) {
      return null;
    }

    return new User(userData.id, userData.name, userData.handle);
  }

  static async create(id: string, name: string, handle: string) {
    const db = firestore();
    const userCollection = db.collection("users");
    const userDoc = userCollection.doc(id);

    if (!(await userDoc.get()).exists) {
      return null;
    }
    const user = new User(id, name, handle);

    const createResponse = await userCollection
      .doc(id)
      .create({
        id: user.id,
        name: user.name,
        handle: user.handle,
      })
      .catch((error) => console.log(error));

    if (createResponse) return user;
    else return null;
  }

  static async update(id: string, name: string, handle: string) {
    const db = firestore();
    const userCollection = db.collection("users");
    const userDoc = userCollection.doc(id);

    // user does not exist

    if (!(await userDoc.get()).exists) {
      return null;
    }

    const updateResponse = await userDoc
      .update({
        id: id,
        name: name,
        handle: handle,
      })
      .catch((error) => console.log(error));

    // if somehting went wrong

    if (updateResponse) return await User.get(id);
    else return null;
  }

  static async delete(id: string, name: string, handle: string) {
    const db = firestore();
    const userCollection = db.collection("users");
    const userDoc = userCollection.doc(id);

    // user does not exist

    if (!(await userDoc.get()).exists) {
      return null;
    }

    await userDoc.delete().catch((error) => console.log(error));
  }

  static async getByHandle(handle: string) {
    const db = firestore();
    const users = await db
      .collection("users")
      .where("handle", "==", handle)
      .get();

    return users.docs.map((user) => user.data());
  }

  static async getTwaats(name: string) {
    const db = firestore();
    const twaats = await db
      .collection("twaats")
      .where("owner", "==", name)
      .get();

    return twaats.docs.map((twaat) => twaat.data());
  }
}

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

import { exportPKCS8, exportSPKI, generateKeyPair } from "jose";

const generateKeys = async () => {
  if (!existsSync("cert")) fs.mkdirSync("cert");

  const { privateKey, publicKey } = await generateKeyPair("RS256", {
    extractable: true,
    modulusLength: 2048,
  });

  const privateKeyPem = await exportPKCS8(privateKey);

  const publicKeyPem = await exportSPKI(publicKey);

  await fs.writeFile("cert/private.key.pem", privateKeyPem);
  await fs.writeFile("cert/public.key.pem", publicKeyPem);
};

generateKeys()
  .then(() =>
    console.log("Asymmetric private and public key successfully generated!"),
  )
  .catch((err) => console.error(`Key generation error: ${err.message}`, err));

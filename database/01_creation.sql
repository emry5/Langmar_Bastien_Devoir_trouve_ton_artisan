CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE IF NOT EXISTS artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    specialite VARCHAR(150) NOT NULL,
    categorie VARCHAR(50) NOT NULL,
    localisation VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    description TEXT NULL,
    siteWeb VARCHAR(255) NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artisanId INT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    objet VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,

    CONSTRAINT fk_contacts_artisan
        FOREIGN KEY (artisanId)
        REFERENCES artisans(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
USE trouve_ton_artisan;

INSERT INTO artisans
(nom, specialite, categorie, localisation, note, description, siteWeb, createdAt, updatedAt)
VALUES
('Martin Construction', 'Maçonnerie', 'Bâtiment', 'Lyon', 5.0, NULL, NULL, NOW(), NOW()),
('Dupont Rénovation', 'Plomberie', 'Bâtiment', 'Villeurbanne', 4.0, NULL, NULL, NOW(), NOW()),
('Électricité Rhône', 'Électricité', 'Bâtiment', 'Bron', 5.0, NULL, NULL, NOW(), NOW()),
('Martin Coiffure', 'Coiffure', 'Services', 'Lyon', 5.0, NULL, NULL, NOW(), NOW()),
('Nettoyage Pro', 'Nettoyage', 'Services', 'Caluire-et-Cuire', 4.0, NULL, NULL, NOW(), NOW()),
('Services Express', 'Réparation', 'Services', 'Oullins', 5.0, NULL, NULL, NOW(), NOW()),
('Atelier du Bois', 'Menuiserie', 'Fabrication', 'Lyon', 5.0, NULL, NULL, NOW(), NOW()),
('Créations Métal', 'Métallerie', 'Fabrication', 'Vénissieux', 4.0, NULL, NULL, NOW(), NOW()),
('Atelier Créatif', 'Création artisanale', 'Fabrication', 'Tassin-la-Demi-Lune', 5.0, NULL, NULL, NOW(), NOW()),
('Boulangerie du Centre', 'Boulangerie', 'Alimentation', 'Lyon', 5.0, NULL, NULL, NOW(), NOW()),
('La Ferme du Rhône', 'Produits fermiers', 'Alimentation', 'Brignais', 4.0, NULL, NULL, NOW(), NOW()),
('Le Gourmet Lyonnais', 'Traiteur', 'Alimentation', 'Lyon', 5.0, NULL, NULL, NOW(), NOW());
USE trouve_ton_artisan;

INSERT INTO artisans
(nom, specialite, categorie, localisation, email, note, description, siteWeb, createdAt, updatedAt)
VALUES
('Martin Construction', 'Maçonnerie', 'Bâtiment', 'Lyon', 'martin.construction@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Dupont Rénovation', 'Plomberie', 'Bâtiment', 'Villeurbanne', 'dupont.renovation@example.com', 4.0, NULL, NULL, NOW(), NOW()),
('Électricité Rhône', 'Électricité', 'Bâtiment', 'Bron', 'electricite.rhone@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Martin Coiffure', 'Coiffure', 'Services', 'Lyon', 'martin.coiffure@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Nettoyage Pro', 'Nettoyage', 'Services', 'Caluire-et-Cuire', 'nettoyage.pro@example.com', 4.0, NULL, NULL, NOW(), NOW()),
('Services Express', 'Réparation', 'Services', 'Oullins', 'services.express@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Atelier du Bois', 'Menuiserie', 'Fabrication', 'Lyon', 'atelier.bois@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Créations Métal', 'Métallerie', 'Fabrication', 'Vénissieux', 'creations.metal@example.com', 4.0, NULL, NULL, NOW(), NOW()),
('Atelier Créatif', 'Création artisanale', 'Fabrication', 'Tassin-la-Demi-Lune', 'atelier.creatif@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('Boulangerie du Centre', 'Boulangerie', 'Alimentation', 'Lyon', 'boulangerie.centre@example.com', 5.0, NULL, NULL, NOW(), NOW()),
('La Ferme du Rhône', 'Produits fermiers', 'Alimentation', 'Brignais', 'ferme.rhone@example.com', 4.0, NULL, NULL, NOW(), NOW()),
('Le Gourmet Lyonnais', 'Traiteur', 'Alimentation', 'Lyon', 'gourmet.lyonnais@example.com', 5.0, NULL, NULL, NOW(), NOW());
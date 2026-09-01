# OpenTofu Infomaniak

Cette variante porte le socle OpenStack du prototype DIST01b vers
Infomaniak Public Cloud. Elle utilise le profil `clouds.yaml` fourni par
Infomaniak, sans recopier de mot de passe dans les fichiers `.tf`.

## Préparer l'accès

Placer le fichier téléchargé depuis Infomaniak dans :

```bash
mkdir -p ~/.config/openstack
cp ~/Downloads/clouds.yaml ~/.config/openstack/clouds.yaml
chmod 600 ~/.config/openstack/clouds.yaml
openstack --os-cloud PCP-XXXXXXX token issue
```

Le nom du profil doit correspondre à `cloud_name` dans `terraform.tfvars`.

## Déployer prudemment

```bash
cd ~/cloud-iam/opentofu/infomaniak
cp terraform.tfvars.example terraform.tfvars
${EDITOR:-nano} terraform.tfvars
tofu init
tofu fmt
tofu validate
tofu plan
```

Ne lancer `tofu apply` qu'après vérification des quotas, de la région, de
l'image, des flavors et des réseaux retournés par le projet Infomaniak.

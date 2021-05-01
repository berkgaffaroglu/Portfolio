from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255, blank=True, null=True)
    image = models.ImageField(blank=True, upload_to='images/')
    description = models.TextField(blank=True, null=True)
    CATEGORIES_BACKEND = {
        ('Uncategorized', 'Uncategorized'),
        ('Django', 'Django'),
        ('Flask', 'Flask'),
        ('Ruby','Ruby'),
        ('Python Application', 'Python Application'),
        ('Node.js', 'Node.js'),
    }
    CATEGORIES_FRONTEND = {
        ('Uncategorized', 'Uncategorized'),
        ('React.js', 'React.js'),
        ('Vue.js', 'Vue.js'),
        ('Angular.js', 'Angular.js'),
    }

    backend_category = models.CharField(choices=CATEGORIES_BACKEND, default='Uncategorized', max_length=100, blank=True, null=True)
    frontend_category = models.CharField(choices=CATEGORIES_FRONTEND, default='Uncategorized',max_length=100, blank=True, null=True)
    live_server = models.CharField(max_length=100, blank=True, null=True)
    github_repository = models.CharField(max_length=100, blank=True, null=True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.project.title

class Contact(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    company_name = models.CharField(max_length=255)
    e_mail = models.CharField(null=True, blank=True, max_length=255)
    skype = models.CharField(null=True, blank=True, max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)
    
    def __str_(self):
        return self.title

class GeneralInformation(models.Model):
    first_section_header = models.TextField(null=True, blank=True, max_length=255)
    first_section_description = models.TextField(null=True, blank=True, max_length=255)
    second_section_header = models.TextField(null=True, blank=True, max_length=255)
    second_section_description = models.TextField(null=True, blank=True, max_length=255)
    third_section_header = models.TextField(null=True, blank=True, max_length=255)
    third_section_description = models.TextField(null=True, blank=True, max_length=255)
    stackoverflow_link = models.CharField(null=True, blank=True, max_length=255)
    github_link = models.CharField(null=True, blank=True, max_length=255)
    twitter = models.CharField(null=True, blank=True, max_length=255)
    linkedin = models.CharField(null=True, blank=True, max_length=255)
    image = models.ImageField(blank=True, upload_to='images/')
    
    # Serialize this model.

    def __str_(self):
        return "General Info"


class CertificateImage(models.Model):
    project = models.ForeignKey(GeneralInformation, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

from rest_framework import serializers
from .models import Project, ProjectImage, Contact, GeneralInformation, CertificateImage

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class GeneralInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralInformation
        fields = '__all__'

class CertificateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateImage
        fields = '__all__'

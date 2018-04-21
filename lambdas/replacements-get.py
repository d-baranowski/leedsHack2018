import boto3
import json
from http import HTTPStatus


client = boto3.client('dynamodb', region_name='eu-west-2')

def lambda_handler(event, context):
    
    replacementId = event['pathParameters']['replacementId']
    
    print('Getting ' + replacementId)
    
    try:
        response = client.get_item(
            TableName='Replacements',
            Key={
                'replacementId': { 'S': replacementId }
            }
        )
    except ClientException as error:
        print(error)
        return {
            'statusCode': HTTPStatus.INTERNAL_SERVER_ERROR,
            'body': json.dumps(error)
        }
    
    print(response)
    
    if 'Item' not in response:
        return {
            'statusCode': HTTPStatus.BAD_REQUEST,
            'body': json.dumps({'error': 'Item missing'})
        }
    
    textPattern = response['Item']['textPattern']['S']
    replacementTexts = response['Item']['replacementTexts']['SS']
    
    response_body = {
        'textPattern': textPattern,
        'replacementTexts': replacementTexts
    }
    
    return {
        'statusCode': 200,
        'body': json.dumps(response_body)
    }
    